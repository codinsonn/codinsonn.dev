import { z, aetherSchema } from 'aetherspace/schemas'
import { ClerkVerificationStatus } from './ClerkVerificationStatus'
import { ClerkLinkReference } from './ClerkLinkReference'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ClerkUserPhoneNumber: `The PhoneNumber object describes a phone number. Phone numbers can be used as a proof of identification for users, or simply as a means of contacting users. More info: https://clerk.com/docs/references/javascript/phone-number/phone-number`,
  id: `A unique identifier for this clerk user's phone number.`,
  phoneNumber: `The value of this phone number, in E.164 format: https://en.wikipedia.org/wiki/E.164`,
  reservedForSecondFactor: `Set to true if this phone number is reserved for multi-factor authentication (2FA). Set to false otherwise.`,
  defaultSecondFactor: `Set to true if this phone number is the default second factor. Set to false otherwise. A user must have exactly one default second factor, if multi-factor authentication (2FA) is enabled.`,
  verification: `An object holding information on the verification of this phone number.`,
  linkedTo: `An object containing information about any other identification that might be linked to this phone number.`,
}

/** --- ClerkUserPhoneNumber ------------------------------------------------------------------- */
/** -i- The PhoneNumber object describes a phone number. Phone numbers can be used as a proof of identification for users, or simply as a means of contacting users. More info: https://clerk.com/docs/references/javascript/phone-number/phone-number */
export const ClerkUserPhoneNumber = aetherSchema('ClerkUserPhoneNumber', {
  id: z.string().id().describe(d.id),
  phoneNumber: z.string().describe(d.phoneNumber),
  reservedForSecondFactor: z.boolean().describe(d.reservedForSecondFactor),
  defaultSecondFactor: z.boolean().describe(d.defaultSecondFactor),
  verification: ClerkVerificationStatus.nullish().describe(d.verification),
  linkedTo: ClerkLinkReference.array().describe(d.linkedTo),
}).describe(d.ClerkUserPhoneNumber)

/** -i- The PhoneNumber object describes a phone number. Phone numbers can be used as a proof of identification for users, or simply as a means of contacting users. More info: https://clerk.com/docs/references/javascript/phone-number/phone-number */
export type ClerkUserPhoneNumber = z.infer<typeof ClerkUserPhoneNumber>
