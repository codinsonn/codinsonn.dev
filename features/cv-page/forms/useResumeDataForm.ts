import { useFormState } from 'aetherspace/forms/useFormState'
import { ResumeData } from 'cv-page/schemas/ResumeData'

/* --- useResumeDataForm() --------------------------------------------------------------------- */

const useResumeDataForm = (initialValues) => {
  const formState = useFormState({
    stateSchema: ResumeData,
    initialValues,
  })
  return formState
}

/* --- Exports --------------------------------------------------------------------------------- */

export default useResumeDataForm
