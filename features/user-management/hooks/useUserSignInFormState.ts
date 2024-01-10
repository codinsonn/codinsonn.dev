import { useFormState } from 'aetherspace/forms/useFormState'
import { DeepPartial } from 'aetherspace/types/typeHelpers'
import { AetherProps } from 'aetherspace/schemas'
import { UserSignInState } from '../schemas/UserSignInState'

/* --- Schema & Types -------------------------------------------------------------------------- */

export type UserSignInStateInitialValues = DeepPartial<AetherProps<typeof UserSignInState>>

/* --- useUserSignInFormState() ---------------------------------------------------------------- */

const useUserSignInFormState = (initialValues: UserSignInStateInitialValues) => {
  const formState = useFormState({
    stateSchema: UserSignInState,
    initialValues,
    applyDefaults: true,
  })
  return formState
}

/* --- Exports --------------------------------------------------------------------------------- */

export default useUserSignInFormState
