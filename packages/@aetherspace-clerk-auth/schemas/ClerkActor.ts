import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ClerkActor: `actor - will only be included if the user is impersonating another user. See user impersonation for more information: https://clerk.com/docs/custom-flows/user-impersonation#jwt-claims`,
  iss: `issuer - the Frontend API URL of your instance (e.g. https://clerk.your-site.com if production instance, https://your-site.clerk.accounts.dev if development instance).`,
  sid: `session ID - the ID of the current impersonated user session (e.g. sess_123).`,
  sub: `subject - the ID of the impersonated user of the session (e.g. user_123).`,
}

/** --- ClerkActor ----------------------------------------------------------------------------- */
/** -i- actor - will only be included if the user is impersonating another user. See user impersonation for more information: https://clerk.com/docs/custom-flows/user-impersonation#jwt-claims */
export const ClerkActor = aetherSchema('ClerkActor', {
  iss: z.string().describe(d.iss),
  sid: z.string().describe(d.sid),
  sub: z.string().describe(d.sub),
}).describe(d.ClerkActor)

/** -i- actor - will only be included if the user is impersonating another user. See user impersonation for more information: https://clerk.com/docs/custom-flows/user-impersonation#jwt-claims */
export type ClerkActor = z.infer<typeof ClerkActor>
