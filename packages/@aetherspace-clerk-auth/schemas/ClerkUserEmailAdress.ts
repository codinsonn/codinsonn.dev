import { z, aetherSchema } from 'aetherspace/schemas'
import { ClerkVerificationStatus } from './ClerkVerificationStatus'
import { ClerkLinkReference } from './ClerkLinkReference'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ClerkUserEmailAdress: `The email adress data as managed by clerk: https://clerk.com/docs/references/javascript/email-address/email-address`,
  id: `A unique identifier for this clerk user's email address.`,
  emailAddress: `The value of this clerk user's email address.`,
  linkedTo: `An object containing information about any other identification that might be linked to this email address.`,
}

/** --- ClerkUserEmailAdress ------------------------------------------------------------------- */
/** -i- The email adress data as managed by clerk: https://clerk.com/docs/references/javascript/email-address/email-address */
export const ClerkUserEmailAdress = aetherSchema('ClerkUserEmailAdress', {
  id: z.string().id().describe(d.id),
  emailAddress: z.string().email().describe(d.emailAddress),
  verification: ClerkVerificationStatus.nullish(),
  linkedTo: ClerkLinkReference.array().describe(d.linkedTo),
}).describe(d.ClerkUserEmailAdress)

/** -i- The email adress data as managed by clerk: https://clerk.com/docs/references/javascript/email-address/email-address */
export type ClerkUserEmailAdress = z.infer<typeof ClerkUserEmailAdress>
