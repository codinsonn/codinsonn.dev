import { z, aetherSchema } from 'aetherspace/schemas'
import { ClerkVerificationStatusOptions } from './clerk.enums'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ClerkVerificationStatus: `The state of the verification process of a sign-in or sign-up attempt.: https://clerk.com/docs/references/javascript/verification`,
  status: `The state of the verification.`,
  strategy: `The strategy pertaining to the parent sign-up or sign-in attempt.`,
  externalVerificationRedirectURL: `The redirect URL for an external verification.`,
  attempts: `The number of attempts related to the verification.`,
  error: `The last error the verification attempt ran into.`,
  expireAt: `The time the verification will expire at.`,
  nonce: `The nonce pertaining to the verification.`,
}

/** --- ClerkVerificationStatus ---------------------------------------------------------------- */
/** -i- The state of the verification process of a sign-in or sign-up attempt.: https://clerk.com/docs/references/javascript/verification */
export const ClerkVerificationStatus = aetherSchema('ClerkVerificationStatus', {
  status: ClerkVerificationStatusOptions.nullish().describe(d.status),
  strategy: z.string().describe(d.strategy),
  externalVerificationRedirectURL: z.string().url().nullish().describe(d.externalVerificationRedirectURL), // prettier-ignore
  attempts: z.number().int().describe(d.attempts),
  error: z.string().nullish().describe(d.error),
  expireAt: z.number().int().describe(d.expireAt),
  nonce: z.string().nullish().describe(d.nonce),
}).describe(d.ClerkVerificationStatus)

/** -i- The state of the verification process of a sign-in or sign-up attempt.: https://clerk.com/docs/references/javascript/verification */
export type ClerkVerificationStatus = z.infer<typeof ClerkVerificationStatus>
