import { useFormState } from 'aetherspace/forms/useFormState'
import { DeepPartial } from 'aetherspace/types/typeHelpers'
import { AetherProps } from 'aetherspace/schemas'
import { UserSignUpState } from '../schemas/UserSignUpState'

/* --- Schema & Types -------------------------------------------------------------------------- */

export type UserSignUpStateInitialValues = DeepPartial<AetherProps<typeof UserSignUpState>>

/* --- useUserSignUpFormState() ---------------------------------------------------------------- */

const useUserSignUpFormState = (initialValues: UserSignUpStateInitialValues) => {
  const formState = useFormState({
    stateSchema: UserSignUpState,
    initialValues,
    applyDefaults: true,
  })
  return formState
}

/* --- Exports --------------------------------------------------------------------------------- */

export default useUserSignUpFormState
