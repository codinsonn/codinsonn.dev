import { z, aetherSchema } from 'aetherspace/schemas'
import { ClerkVerificationStatus } from './ClerkVerificationStatus'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ClerkExternalAccount: `The ExternalAccount object is a model around an identification obtained by an external provider (e.g. an OAuth provider such as Google). More info: https://clerk.com/docs/references/javascript/external-account`,
  id: `A unique identifier for this external account.`,
  identificationId: `The identification with which this external account is associated.`,
  provider: `The provider name e.g. google`,
  providerUserId: `The unique ID of the user in the provider.`,
  publicMetadata: `Metadata provided about the user from the provider.`,
  emailAddress: `The provided email address of the user.`,
  approvedScopes: `The scopes that the user has granted access to.`,
  firstName: `The provided first name of the user.`,
  lastName: `The provided last name of the user.`,
  avatarUrl: `The provided avatar URL of the user.`,
  username: `The provided username of the user.`,
  label: `A descriptive label to differentiate multiple external accounts of the same user for the same provider.`,
  verification: `An object holding information on the verification of this external account.`,
}

/** --- ClerkExternalAccount ------------------------------------------------------------------- */
/** -i- The ExternalAccount object is a model around an identification obtained by an external provider (e.g. an OAuth provider such as Google). More info: https://clerk.com/docs/references/javascript/external-account */
export const ClerkExternalAccount = aetherSchema('ClerkExternalAccount', {
  id: z.string().id().describe(d.id),
  identificationId: z.string().id().describe(d.identificationId),
  provider: z.string().describe(d.provider),
  providerUserId: z.string().describe(d.providerUserId),
  // publicMetadata: z.object({}).describe(d.publicMetadata),
  emailAddress: z.string().email().describe(d.emailAddress),
  approvedScopes: z.array(z.string()).describe(d.approvedScopes),
  firstName: z.string().describe(d.firstName),
  lastName: z.string().describe(d.lastName),
  avatarUrl: z.string().url().describe(d.avatarUrl),
  username: z.string().nullish().describe(d.username),
  label: z.string().nullish().describe(d.label),
  verification: ClerkVerificationStatus.nullish().describe(d.verification),
}).describe(d.ClerkExternalAccount)

/** -i- The ExternalAccount object is a model around an identification obtained by an external provider (e.g. an OAuth provider such as Google). More info: https://clerk.com/docs/references/javascript/external-account */
export type ClerkExternalAccount = z.infer<typeof ClerkExternalAccount>
