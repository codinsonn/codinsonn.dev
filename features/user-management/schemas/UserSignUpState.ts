import { z } from 'aetherspace/schemas'
import { UserSignInState } from './UserSignInState'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  UserSignUpState: `Form state for user sign-up`,
}

/** --- UserSignUpState ------------------------------------------------------------------------ */
/** -i- Form state for user sign-up */
export const UserSignUpState = UserSignInState.extendSchema('UserSignUpState', {
  firstName: z.string().min(2).default(''),
  lastName: z.string().min(2).default(''),
  pendingVerification: z.boolean().default(false),
  verificationCode: z.string().min(6).default(''),
}).describe(d.UserSignUpState)

/** -i- Form state for user sign-up */
export type UserSignUpState = z.infer<typeof UserSignUpState>
