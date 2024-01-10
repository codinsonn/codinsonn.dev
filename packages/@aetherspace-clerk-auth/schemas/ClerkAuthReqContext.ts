import { z, aetherSchema } from 'aetherspace/schemas'
import { ClerkSessionClaims } from './ClerkSessionClaims'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ClerkAuthReqContext: `The auth context provided by clerk in middleware.ts`,
  session_id: `The ID of the current session (e.g. sess_123).`,
  user_id: `The ID of the current user of the session (e.g. user_123).`,
  isPublicRoute: `Whether the current request is a public route (e.g. /api/graphql).`,
  isApiRoute: `Whether the current request is an API route (e.g. /api/context).`,
}

/** --- ClerkAuthReqContext -------------------------------------------------------------------- */
/** -i- The auth context provided by clerk in middleware.ts */
export const ClerkAuthReqContext = aetherSchema('ClerkAuthReqContext', {
  sessionClaims: ClerkSessionClaims.nullish(),
  session_id: z.string().nullish().describe(d.session_id),
  user_id: z.string().nullish().describe(d.user_id),
  isPublicRoute: z.boolean().nullish().describe(d.isPublicRoute),
  isApiRoute: z.boolean().nullish().describe(d.isApiRoute),
}).describe(d.ClerkAuthReqContext)

/** -i- The auth context provided by clerk in middleware.ts */
export type ClerkAuthReqContext = z.infer<typeof ClerkAuthReqContext>
