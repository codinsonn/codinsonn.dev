import { useFormState } from 'aetherspace/forms/useFormState'
import { GetResumeDataByUserSlugDataBridge } from '../schemas/GetResumeDataByUserSlugDataBridge'
import { DeepPartial } from 'aetherspace/types/typeHelpers'

/* --- Types ----------------------------------------------------------------------------------- */

type InitialFormData = DeepPartial<(typeof GetResumeDataByUserSlugDataBridge)['RES']>

/* --- useResumeDataForm() --------------------------------------------------------------------- */

const useResumeDataForm = (initialValues: InitialFormData) => {
  const formState = useFormState({
    stateSchema: GetResumeDataByUserSlugDataBridge.responseSchema,
    initialValues,
    applyDefaults: true,
  })
  return formState
}

/* --- Exports --------------------------------------------------------------------------------- */

export default useResumeDataForm
