import { z as zod } from 'zod'
import zodToJsonSchema from 'zod-to-json-schema'
import type { JSONSchema7 } from 'json-schema'

/* --- Types ----------------------------------------------------------------------------------- */

const SCHEMA_MAP = Object.freeze({
  boolean: 'AetherBoolean',
  number: 'AetherNumber',
  string: 'AetherString',
  date: 'AetherDate',
  object: 'AetherSchema',
  array: 'AetherArray',
  color: 'AetherColor',
  id: 'AetherId',
})

export type AetherZodType<T = any> = {
  type: keyof typeof SCHEMA_MAP
  aetherType: typeof SCHEMA_MAP[keyof typeof SCHEMA_MAP]
  description?: string
  defaultValue?: T
  schemaName?: string
  isOptional?: boolean
  isNullable?: boolean
  schema?: AetherZodType | Record<string, any>
}

export type ZodObjectSchema<S extends zod.ZodRawShape> = zod.ZodObject<S>
export type ZodExtendedSchema<S extends zod.ZodRawShape> = ZodObjectSchema<S> & {
  key?: string
  schemaDef?: S
}

/** --- parseType() ---------------------------------------------------------------------------- */
/** -i- Add correct fields like type & aetherType while converting a JSON schema prop definition to aetherspace prop definition. */
const parseType = (propDef: JSONSchema7, propSchema: Record<string, unknown> = {}) => {
  // @ts-ignore
  const { type: propType, enum: propEnum, anyOf } = propDef
  if (Array.isArray(propType)) {
    propSchema.isNullable = propType.includes('null')
    const leftoverType = propType.filter((type: string) => type !== 'null')[0]
    propSchema.aetherType = SCHEMA_MAP[leftoverType]
    propSchema.type = leftoverType
  } else if (propDef.format === 'date-time') {
    propSchema.aetherType = 'AetherDate'
    propSchema.type = 'date'
  } else if (propEnum) {
    propSchema.aetherType = 'AetherEnum'
    propSchema.type = 'enums'
    propSchema.schema = propEnum.reduce(
      (acc, enumVal) => ({
        ...(acc as Record<string, string | number>),
        [enumVal as string]: enumVal,
      }),
      {}
    )
  } else {
    propSchema.aetherType = SCHEMA_MAP[propType!]
    propSchema.type = propType
  }
  // Return
  return propSchema
}

/** --- parseProp() ---------------------------------------------------------------------------- */
/** -i- Convert a JSON schema prop definition to an aetherspace prop definition */
const parseProp = (propKey: string, propDef: JSONSchema7, parseContext: { required: string[] }) => {
  // @ts-ignore
  const { type: propType, default: propDefault, description } = propDef
  const required = parseContext?.required
  let propSchema = {} as Record<string, unknown>
  // Determine if optional
  propSchema.isOptional = required ? !required.includes(propKey) : true
  // Determine types
  propSchema = parseType(propDef, propSchema)
  // Handle descriptions
  if (description && propSchema.type !== 'object') propSchema.description = description
  // Handle defaults
  if (propDefault) propSchema.defaultValue = propDefault
  // Handle objects
  if (propType === 'object') {
    propSchema = { ...propSchema, ...parseSchema(propDef as JSONSchema7) }
  }
  // Handle arrays
  if (propSchema.aetherType === 'AetherArray') {
    propSchema.schema = parseProp(propKey, propDef.items as Record<string, unknown>, parseContext)
  }
  // Return parsed schema
  return propSchema
}

/** --- parseSchema() -------------------------------------------------------------------------- */
/** -i- Convert a JSON schema object to an aetherspace compatible schema */
const parseSchema = (schema: JSONSchema7) => {
  // @ts-ignore
  const { type, description, properties, required = [] } = schema
  // Do nothing when not an object
  if (type !== 'object') return {}
  // Build aether schema
  const resultSchema = {} as Record<string, any>
  resultSchema.aetherType = 'AetherSchema'
  resultSchema.type = type
  resultSchema.schemaName = description
  // Parse properties
  resultSchema.schema = Object.entries(properties!).reduce((atSchema, [propKey, propDef]) => {
    const propSchema = parseProp(propKey, propDef as Record<string, unknown>, { required })
    // Abort if unknown
    if (!propSchema.aetherType) {
      console.warn(`Unknown prop type: ${propKey} (${propSchema.type})`, propSchema)
      return atSchema
    }
    // Return prop definition
    return { ...atSchema, [propKey]: propSchema }
  }, {})
  // Return parsed schema
  return resultSchema
}

/** --- extendFromSchema() --------------------------------------------------------------------- */
/** -i- Add new properties to an eatherschema and give it a new name */
export const extendFromSchema = <S extends zod.ZodRawShape, E extends zod.ZodRawShape>(
  schema: ZodExtendedSchema<S>,
  key: string,
  extraProps: E
) => {
  return aetherSchema<S & E>(key, { ...schema.shape, ...extraProps })
}

/** --- pickFromSchema() ----------------------------------------------------------------------- */
/** -i- Create new schema by picking properties from another */
export const pickFromSchema = <
  S extends zod.ZodRawShape,
  P extends Parameters<ZodExtendedSchema<S>['pick']>[0]
>(
  schema: ZodExtendedSchema<S>,
  key: string,
  pickProps: P
) => {
  const pickedSchema = schema.pick(pickProps)
  return pickedSchema.describe(key)
}

/** --- omitFromSchema() ----------------------------------------------------------------------- */
/** -i- Create new schema by removing properties from another */
export const omitFromSchema = <
  S extends zod.ZodRawShape,
  O extends Parameters<ZodExtendedSchema<S>['omit']>[0]
>(
  schema: ZodExtendedSchema<S>,
  key: string,
  omitProps: O
) => {
  const omittedSchema = schema.omit(omitProps)
  return omittedSchema.describe(key)
}

/** --- makeSchemaRequired() ------------------------------------------------------------------- */
/** -i- Create a new schema by making all properties from another schema required */
export const makeSchemaRequired = <S extends zod.ZodRawShape>(
  schema: ZodExtendedSchema<S>,
  key: string
) => {
  const requiredSchema = schema.required()
  return requiredSchema.describe(key)
}

/** --- makeSchemaPartial() -------------------------------------------------------------------- */
/** -i- Create a new schema by making all properties from another schema optional */
export const makeSchemaPartial = <S extends zod.ZodRawShape>(
  schema: ZodExtendedSchema<S>,
  key: string
) => {
  const partialSchema = schema.partial()
  return partialSchema.describe(key)
}

/** --- makeSchemaDeepPartial() ---------------------------------------------------------------- */
/** -i- Create a new schema by making all properties from another schema, including nested ones, optional */
export const makeSchemaDeepPartial = <S extends zod.ZodRawShape>(
  schema: ZodExtendedSchema<S>,
  key: string
) => {
  const partialSchema = schema.deepPartial()
  return partialSchema.describe(key)
}

/** --- assignDefs() --------------------------------------------------------------------------- */
/** -i- Add key & schema definition to zod object */
const assignDefs = <S extends zod.ZodRawShape>(
  zodSchema: ZodObjectSchema<S>,
  key: string,
  schemaDef: S
) => {
  return Object.assign(zodSchema, { key, schemaDef })
}

/** --- assignMethods() ------------------------------------------------------------------------ */
/** -i- Add ways to extend schemas from existing schemas */
const assignMethods = <S extends zod.ZodRawShape>(zodSchema: ZodExtendedSchema<S>) => {
  return Object.assign(zodSchema as ZodExtendedSchema<S>, {
    extendSchema: <E extends zod.ZodRawShape>(key: string, extraProps: E) => {
      return extendFromSchema(zodSchema, key, extraProps)
    },
    pickSchema: <P extends Parameters<ZodExtendedSchema<S>['pick']>[0]>(
      key: string,
      pickProps: P
    ) => {
      const pickSchema = pickFromSchema(zodSchema, key, pickProps).describe(key)
      return assignMethods(pickSchema)
    },
    omitSchema: <O extends Parameters<ZodExtendedSchema<S>['pick']>[0]>(
      key: string,
      omitProps: O
    ) => {
      const omitSchema = omitFromSchema(zodSchema, key, omitProps).describe(key)
      return assignMethods(omitSchema)
    },
    // -i- TODO: Make these play nice with Typescript -i-
    // -!- They are why we have a "@ts-nocheck" at the top of this file -!-
    // requiredSchema: (key: string) => {
    //   const requiredSchema = makeSchemaRequired(zodSchema, key).describe(key)
    //   return assignMethods(requiredSchema)
    // },
    // partialSchema: (key: string) => {
    //   const partialSchema = makeSchemaPartial(zodSchema, key).describe(key)
    //   return assignMethods(partialSchema)
    // },
    // deepPartialSchema: (key: string) => {
    //   const deepPartialSchema = makeSchemaDeepPartial(zodSchema, key).describe(key)
    //   return assignMethods(deepPartialSchema)
    // },
    introspect: () => parseSchema(zodToJsonSchema(zodSchema) as JSONSchema7),
  })
}

/** --- aetherSchema() ------------------------------------------------------------------------- */
/** -i- Defines your datastructure (Props, Args, Models) as a zod powered single source of truth */
export const aetherSchema = <S extends zod.ZodRawShape>(key: string, schemaDef: S) => {
  // Attach key & schema definition
  const zodSchema: ZodExtendedSchema<S> = assignDefs(zod.object(schemaDef), key, schemaDef)
  // Attach transform methods
  return assignMethods(zodSchema.describe(key))
}

/** --- buildSchema() -------------------------------------------------------------------------- */
/** -i- Define your datastructure (Props, Args, Models) as a zod object and turn it into an aetherSchema */
export const buildSchema = <S extends zod.ZodRawShape>(key: string, schema: zod.ZodObject<S>) => {
  return aetherSchema(key, schema.shape)
}

/* --- Exports --------------------------------------------------------------------------------- */

// TODO: Figure out how to export these types
// export const z = Object.assign(zod, {
//   schema: aetherSchema,
//   buildSchema,
// })

/* --- Test ------------------------------------------------------------------------------------ */

// const ZodTest = zod.object({
//   id: zod.string(),
//   name: zod.string().optional(),
//   age: zod.number().int(),
// })
// type ZodTest = zod.infer<typeof ZodTest>

// const AetherTest = aetherSchema('AetherTest', {
//   id: zod.string(),
//   name: zod.string().optional(),
//   age: zod.number().int(),
//   obj: aetherSchema('Todo', {
//     id: zod.string(),
//   }),
// })
// type AetherTest = zod.infer<typeof AetherTest>

// const ZodExtended = ZodTest.extend({
//   email: zod.string().email(),
// })
// type ZodExtended = zod.infer<typeof ZodExtended>

// const AetherExtended = AetherTest.extendSchema('AetherExtended', {
//   email: zod.string().email(),
// })
// type AetherExtended = zod.infer<typeof AetherExtended>

// const ZodOmitted = ZodExtended.omit({ email: true })
// type ZodOmitted = zod.infer<typeof ZodOmitted>

// const AetherOmitted = AetherExtended.omitSchema('AetherOmitted', { email: true })
// type AetherOmitted = zod.infer<typeof AetherOmitted>

// const ZodPicked = ZodExtended.pick({ email: true, name: true })
// type ZodPicked = zod.infer<typeof ZodPicked>

// const AetherPicked = AetherExtended.pickSchema('AetherPicked', { email: true, name: true })
// type AetherPicked = zod.infer<typeof AetherPicked>

// const AetherRequired = makeSchemaRequired(AetherExtended, 'AetherRequired')
// // const AetherRequired = AetherExtended.requiredSchema('AetherRequired') // TODO: Make this work
// type AetherRequired = zod.infer<typeof AetherRequired>

// const AetherPartial = makeSchemaPartial(AetherExtended, 'AetherPartial')
// // const AetherPartial = AetherExtended.partialSchema('AetherPartial') // TODO: Make this work
// type AetherPartial = zod.infer<typeof AetherPartial>

// // TODO: Make this work
// const AetherDeepPartial = makeSchemaDeepPartial(AetherExtended, 'AetherDeepPartial')
// type AetherDeepPartial = zod.infer<typeof AetherDeepPartial>
