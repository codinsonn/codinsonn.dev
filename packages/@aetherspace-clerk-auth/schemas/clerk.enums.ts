import { z } from 'aetherspace/schemas'

/** --- ClerkVerificationStatusOptions --------------------------------------------------------- */
/** -i- The state of the clerk verification. */
export const ClerkVerificationStatusOptions = z.enum([
  'unverified',
  'verified',
  'transferable',
  'transferable',
  'failed',
  'expired',
])

/** -i- The state of the clerk verification. */
export const CLERK_VERIFICATION_STATUS = ClerkVerificationStatusOptions.enum

/** -i- The state of the clerk verification. */
export type ClerkVerificationStatusOptions = z.infer<typeof ClerkVerificationStatusOptions> | null

/** -i- The state of the clerk verification. */
export type CLERK_VERIFICATION_STATUS = ClerkVerificationStatusOptions
