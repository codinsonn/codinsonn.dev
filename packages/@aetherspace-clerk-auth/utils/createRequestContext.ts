import { authMiddleware, clerkClient } from '@clerk/nextjs'

/* --- Types ----------------------------------------------------------------------------------- */

type AuthMiddlewareParams = NonNullable<Parameters<typeof authMiddleware>[0]>
type AfterAuthParams = Parameters<NonNullable<AuthMiddlewareParams['afterAuth']>>
type AuthObject = AfterAuthParams[0]
type ClerkRequest = AfterAuthParams[1]
type NextFetchEvent = AfterAuthParams[2]
type ClerkUser = NonNullable<AuthObject['user']>

type CreateContextOptions = {
  auth: AuthObject
  evt: NextFetchEvent
}

type RequestContext = {
  auth?: AuthObject
  evt?: NextFetchEvent
  user?: ClerkUser | null
  isPublicRoute?: boolean
  isApiRoute?: boolean
}

/** --- createRequestContext() ----------------------------------------------------------------- */
/** -i- Use in middleware.ts to create authentication context for Next.js api routes (server only) */
export const createRequestContext = async (
  req: ClerkRequest,
  config: CreateContextOptions
): Promise<RequestContext> => {
  const { auth, evt } = config || {}
  const { isPublicRoute, isApiRoute } = auth || {}

  let user = auth?.user || null
  if (!user && auth?.userId) user = await clerkClient.users.getUser(auth.userId)

  return {
    auth,
    evt,
    user,
    isPublicRoute,
    isApiRoute,
  }
}
