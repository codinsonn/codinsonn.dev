import { NextResponse } from 'next/server'
import { authMiddleware } from '@clerk/nextjs'
import { createMiddlewareHeaderContext } from 'aetherspace/utils/serverUtils'
import { createRequestContext } from '@aetherspace/clerk-auth/utils/createRequestContext'

/* --- Middleware ------------------------------------------------------------------------------ */

// -i- https://clerk.com/docs/references/nextjs/auth-middleware
// -i- https://nextjs.org/docs/app/api-reference/functions/next-request
export default authMiddleware({
  publicRoutes: ['/api/graphql'],
  async afterAuth(auth, req, evt) {
    // Create the request context header (to pass things like auth, user, etc. to the API)
    const headerContext = await createRequestContext(req, { auth, evt })
    const extraHeaders = {
      // 'x-custom-header': 'custom-value',
    }

    // Execute the request handler (and pass the request context header)
    const res = NextResponse.next({
      request: {
        headers: await createMiddlewareHeaderContext(req, headerContext, extraHeaders),
      },
    })

    // Allow CORS for /api routes
    if (req.nextUrl.pathname.startsWith('/api')) {
      res.headers.append('Access-Control-Allow-Origin', '*')
      res.headers.append('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
      res.headers.append('Access-Control-Allow-Headers', 'Content-Type')
    }

    return res
  },
})

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
}
