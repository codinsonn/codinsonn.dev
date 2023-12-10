/* eslint-disable @typescript-eslint/ban-types */
import { useState, useMemo, useEffect } from 'react'
// Types
import { DeepPartial, HintedKeys } from '../types'
// Schemas
import { z } from '../schemas'
// Utils
import { isEmpty } from '../utils/commonUtils'

/* --- Types ----------------------------------------------------------------------------------- */

export type AetherFormInputBaseProps<T> = {
  value: T
  hasError?: boolean
  disabled?: boolean
  required?: boolean
  onChange: (value: T) => void
  onBlur?: () => void
  onFocus?: () => void
}

export type AetherFormState<T = Record<string, any>, K extends keyof T = keyof T> = {
  /** -i- The current values of the form */
  values: T
  /** -i- A map of all errors in the form */
  errors: Record<K, string[]>
  /** -i- Whether the form is valid or not */
  isValid: boolean
  /** -i- Whether the form has been changed from its default state */
  isUnsaved: boolean
  /** -i- Whether the form is currently the default state */
  isDefaultState: boolean
  /** -i- Sets the form state to the provided values */
  setValues: (values: T) => void
  /** -i- Sets a single value in the form state */
  handleChange: (key: K, value: T[K]) => void
  /** -i- Returns a handler that sets a single value in the form state */
  getChangeHandler: (key: K) => (value: T[K]) => void
  /** -i- Validates the form state, sets errors if not, and returns whether it is valid or not */
  validate: (showErrors?: boolean) => boolean
  /** -i- Updates the form errors */
  updateErrors: (errors: Record<K, string[]>) => void
  /** -i- Resets the form state to its default values */
  resetForm: () => void
  /** -i- Spreadable function that returns the props to add to an input to hook it up to the form state */
  getInputProps: (key: K) => AetherFormInputBaseProps<T[K]>
  /** -i- Transform the values of the form (simply returns it if no transformer was provided) */
  transformValues: (values: T) => Record<K | HintedKeys, unknown>
  /** -i- Returns a single value from the form state */
  getValue: (key: K) => T[K]
  /** -i- Returns the errors for a single value from the form state */
  getErrors: (key: K) => string[]
  /** -i- Returns whether a single value from the form state has errors */
  hasErrors: (key: K) => boolean
}

export type AetherFormStateOptions<S extends z.ZodRawShape, T extends z.infer<z.ZodObject<S>>> = {
  /** -i- Schema to validate the state with *and* provide types from */
  stateSchema: z.ZodObject<S>
  /** -i- Initial values to set the form state to, should be a partial of the possible formState */
  initialValues?: DeepPartial<Record<keyof T | HintedKeys, unknown>>
  /** -i- Will trigger revalidation once a field loses focus */
  validateOnBlur?: boolean
  /** -i- Will trigger revalidation once a field changes */
  validateOnChange?: boolean
  /** -i- Applies state schema defaults to the form state on every change */
  applyDefaults?: boolean
  /** -i- If provided, will transform the values before returning them when calling formState.transformValues() */
  transformValues?: (values: T) => Record<keyof T | HintedKeys, unknown>
}

/** --- useFormState() ------------------------------------------------------------------------- */
/** -i- Returns a set of form management tools to handle form state, including validation, errors and even the required props to add to inputs */
export const useFormState = <S extends z.ZodRawShape, T extends z.infer<z.ZodObject<S>>>(
  options: AetherFormStateOptions<S, T>
): AetherFormState<T> => {
  // Types
  type K = keyof T

  // Options
  const { stateSchema, initialValues, validateOnBlur, validateOnChange } = options // prettier-ignore

  // Defaults
  const defaultValues = useMemo(() => {
    if (options.applyDefaults) return initialValues as T
    return stateSchema.applyDefaults(initialValues ?? {}) as T
  }, [])

  // State
  const [values, setValues] = useState<T>(defaultValues)
  const [errors, updateErrors] = useState<Record<K, string[]>>({} as Record<K, string[]>)
  const valuesToReturn = options.applyDefaults ? stateSchema.applyDefaults(values) : values

  // -- Memos --

  const isDefaultState = useMemo(() => {
    return JSON.stringify(values) === JSON.stringify(defaultValues)
  }, [values, defaultValues])

  // -- Methods --

  const getValue = (key: K) => values[key]

  const getErrors = (key: K) => errors[key] ?? []

  const resetForm = () => setValues(defaultValues)

  const hasErrors = (key: K) => !isEmpty(errors[key])

  const transformValues = () => {
    const transformedValues = options.transformValues?.(valuesToReturn)
    return transformedValues ?? (valuesToReturn as Record<K | (string & {}), unknown>)
  }

  // -- Validation --

  const validate = (showErrors = true) => {
    const validationResult = stateSchema.safeParse(valuesToReturn) // @ts-ignore
    const validationError = validationResult.error as z.ZodError | undefined
    if (validationError && showErrors) {
      const flattenedErrors = validationError.flatten()
      const formErrors = flattenedErrors.fieldErrors as Record<K, string[]>
      const formErrorKeys = Object.keys(formErrors) as K[]
      const updatedErrors = formErrorKeys.reduce((acc, key) => {
        const dedupedErrors = Array.from(new Set(formErrors[key]))
        return { ...acc, [key]: dedupedErrors }
      }, {} as Record<K, string[]>) // prettier-ignore
      updateErrors(updatedErrors)
    }
    return validationResult.success
  }

  // -- Handlers --

  const handleChange = (key: K, value: T[K]) => {
    setValues((currentValues) => ({ ...currentValues, [key]: value }))
  }

  const getChangeHandler = (key: K) => (value: T[K]) => handleChange(key, value)

  // -- Input Props --

  const getInputProps = (key: K) => ({
    value: values[key],
    onChange: (value: T[K]) => handleChange(key, value),
    onBlur: () => validateOnBlur && validate(),
    onFocus: () => validateOnBlur && validate(),
    hasError: hasErrors(key),
  })

  // -- Effects --

  useEffect(() => {
    if (validateOnChange) validate()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [JSON.stringify(values)])

  // -- Vars --

  const isValid = validate(false)
  const isUnsaved = !isDefaultState

  // -- Return --

  return {
    values: valuesToReturn,
    errors,
    isDefaultState,
    isValid,
    isUnsaved,
    setValues,
    handleChange,
    getChangeHandler,
    validate,
    updateErrors,
    resetForm,
    getInputProps,
    transformValues,
    getValue,
    getErrors,
    hasErrors,
  }
}
