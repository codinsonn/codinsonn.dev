import { z, aetherSchema } from 'aetherspace/schemas'
import { ClerkActor } from './ClerkActor'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ClerkSessionClaims: `https://clerk.com/docs/backend-requests/resources/session-tokens#default-session-claims`,
  azp: `authorized party - the Origin header that was included in the original Frontend API request made from the user. Most commonly, it will be the URL of the application (e.g. https://example.com). This claim could be omitted if, for privacy-related reasons, Origin is empty or null.`,
  exp: `expiration time - the time after which the token will expire, as a Unix timestamp. Determined using the Token lifetime JWT template setting in the Clerk Dashboard.`,
  iat: `issued at - the time at which the token was issued, as a Unix timestamp (e.g. 1516239022).`,
  iss: `issuer - the Frontend API URL of your instance (e.g. https://clerk.your-site.com if production instance, https://your-site.clerk.accounts.dev if development instance).`,
  nbf: `not before - the time before which the token is considered invalid, as a Unix timestamp. Determined using the Allowed Clock Skew JWT template setting in the Clerk Dashboard.`,
  sid: `session ID - the ID of the current session (e.g. sess_123).`,
  sub: `subject - the ID of the current user of the session (e.g. user_123).`,
  org_id: `organization ID - the ID of the currently active organization that the user belongs to. Only present if the user is a member of an organization.`,
  org_slug: `organization slug - the slug of the currently active organization that the user belongs to. Only present if the user is a member of an organization.`,
  org_role: `organization role - the role of the user in the currently active organization. Only present if the user is a member of an organization.`,
}

/** --- ClerkSessionClaims --------------------------------------------------------------------- */
/** -i- https://clerk.com/docs/backend-requests/resources/session-tokens#default-session-claims */
export const ClerkSessionClaims = aetherSchema('ClerkSessionClaims', {
  azp: z.string().nullish().describe(d.azp),
  exp: z.number().describe(d.exp),
  iat: z.number().describe(d.iat),
  iss: z.string().describe(d.iss),
  nbf: z.number().describe(d.nbf),
  sid: z.string().describe(d.sid),
  sub: z.string().describe(d.sub),
  org_id: z.string().nullish().describe(d.org_id),
  org_slug: z.string().nullish().describe(d.org_slug),
  org_role: z.string().nullish().describe(d.org_role),
  act: ClerkActor.nullish(),
}).describe(d.ClerkSessionClaims)

/** -i- https://clerk.com/docs/backend-requests/resources/session-tokens#default-session-claims */
export type ClerkSessionClaims = z.infer<typeof ClerkSessionClaims>
