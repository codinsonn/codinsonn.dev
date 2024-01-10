import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  UserSignInState: `Form state for user sign-in`,
}

/** --- UserSignInState ------------------------------------------------------------------------ */
/** -i- Form state for user sign-in */
export const UserSignInState = aetherSchema('UserSignInState', {
  email: z.string().email().default(''),
  password: z.string().min(8).default(''),
}).describe(d.UserSignInState)

/** -i- Form state for user sign-in */
export type UserSignInState = z.infer<typeof UserSignInState>
