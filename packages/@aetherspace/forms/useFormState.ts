/* eslint-disable @typescript-eslint/ban-types */
import { useState, useMemo, useEffect } from 'react'
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
  errors: Record<K, string[]>
  values: T
  isValid: boolean
  isUnsaved: boolean
  isDefaultState: boolean
  setValues: (values: T) => void
  handleChange: (key: K, value: T[K]) => void
  validate: (showErrors?: boolean) => boolean
  updateErrors: (errors: Record<K, string[]>) => void
  resetForm: () => void
  getInputProps: (key: K) => AetherFormInputBaseProps<T[K]>
  transformValues: (values: T) => Record<K | (string & {}), unknown>
  getValue: (key: K) => T[K]
  getErrors: (key: K) => string[]
  hasErrors: (key: K) => boolean
}

export type AetherFormStateOptions<S extends z.ZodRawShape, T extends z.infer<z.ZodObject<S>>> = {
  stateSchema: z.ZodObject<S>
  initialValues?: Record<keyof T | (string & {}), unknown>
  validateOnBlur?: boolean
  validateOnChange?: boolean
  transformValues?: (values: T) => Record<keyof T | (string & {}), unknown>
}

/** --- useFormState() ------------------------------------------------------------------------- */
/** -i- Returns a set of form management tools to handle form state, including validation, errors and even the required props to add to inputs */
export const useFormState = <S extends z.ZodRawShape, T extends z.infer<z.ZodObject<S>>>(
  options: AetherFormStateOptions<S, T>
): AetherFormState<T> => {
  // Options
  const { stateSchema, initialValues, validateOnBlur, validateOnChange } = options
  const defaultValues = useMemo(() => stateSchema.applyDefaults(initialValues ?? {}) as T, [])

  // Types
  type K = keyof T

  // State
  const [values, setValues] = useState<T>(defaultValues)
  const [errors, updateErrors] = useState<Record<K, string[]>>({} as Record<K, string[]>)

  // -- Memos --

  const isDefaultState = useMemo(() => {
    return JSON.stringify(values) === JSON.stringify(defaultValues)
  }, [values, defaultValues])

  // -- Methods --

  const getValue = (key: K) => values[key]

  const getErrors = (key: K) => errors[key] ?? []

  const resetForm = () => setValues(defaultValues)

  const hasErrors = (key: K) => !isEmpty(errors[key])

  const transformValues = () => (options.transformValues?.(values) ?? (values as Record<K | (string & {}), unknown>)) // prettier-ignore

  // -- Validation --

  const validate = (showErrors = true) => {
    const validationResult = stateSchema.safeParse(values) // @ts-ignore
    const validationError = validationResult.error as z.ZodError | undefined
    if (validationError && showErrors) {
      const formErrors = validationError.flatten().fieldErrors as Record<K, string[]>
      updateErrors(formErrors)
    }
    return validationResult.success
  }

  // -- Handlers --

  const handleChange = (key: K, value: T[K]) => {
    setValues((currentValues) => ({ ...currentValues, [key]: value }))
  }

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
    values,
    errors,
    isDefaultState,
    isValid,
    isUnsaved,
    setValues,
    handleChange,
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
