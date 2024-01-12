import mongoose, {
  Schema,
  model,
  Model,
  Document,
  SchemaTypeOptions,
  SchemaOptions,
} from 'mongoose'
import { z } from 'aetherspace/schemas'
import { aetherSchemaPlugin } from 'aetherspace/schemas/aetherSchemaPlugin'

/* --- Types ------------------------------------------------------------------------------------- */

type AetherSchemaInput<Z extends z.ZodRawShape> = z.ZodObject<Z>

/* --- Example Input ----------------------------------------------------------------------------- */

// const SomeMongoCollectionSchema = aetherSchema('SomeMongoCollection', {
//     someString: z.string(),
//     someNumber: z.number(),
// })

// ⇣⇣⇣⇣⇣⇣⇣⇣ results of .introspect() executed during `createMongooseDataModel(...)` ⇣⇣⇣⇣⇣⇣⇣⇣

// {
//     aetherType: 'AetherSchema',
//     schemaName: 'SomeMongoCollection',
//     schema: {
//         someString: {
//             aetherType: 'AetherString',
//             isNullable: false,
//             isOptional: false,
//             description: 'Description from { someString: z.string().describe(...) }',
//             ...
//         },
//         someNumber: {
//             aetherType: 'AetherNumber',
//             isNullable: true,
//             isOptional: true,
//             description: 'Description from { someNumber: z.number().nullish().describe(...) }',
//         },
//         ...
//     }
// }

// -i- https://main--62c9a236ee16e6611d719e94.chromatic.com/?path=/story/aetherspace-single-sources-of-truth--page
// -i- https://main--62c9a236ee16e6611d719e94.chromatic.com/?path=/story/aetherspace-automation--page

/* --- Example Output ---------------------------------------------------------------------------- */

// ⇣⇣⇣⇣⇣⇣⇣⇣ Mongoose Schema created during `createMongooseDataModel(...)` ⇣⇣⇣⇣⇣⇣⇣⇣

// const mongooseSchema = new Schema({
//     someString: {
//         type: String,
//         required: true,
//         default: undefined,
//         description: 'The description from { someString: z.string().describe(...) }',
//         ...
//     },
//     someNumber: {
//         type: Number,
//         required: false,
//         default: undefined,
//         description: 'The description from { someNumber: z.number().nullable().optional().describe(...) }',
//     },
//     ...
// })

// ⇣⇣⇣⇣⇣⇣⇣⇣ Resulting model from `createMongooseDataModel(...)` ⇣⇣⇣⇣⇣⇣⇣⇣

// type SchemaDoc = Document & z.infer<SomeMongoCollectionSchema>
// type SchemaModel = Model<SchemaDoc> & { aetherSchema: typeof SomeMongoCollectionSchema }
// const SomeMongoModel: SchemaModel = model<SchemaDoc>('SomeMongoCollection', mongooseSchema)

// -i- https://mongoosejs.com/docs/guide.html#definition
// -i- https://mongoosejs.com/docs/guide.html#models

/** --- createMongooseDataModel() ----------------------------------------------------------------- */
/** -i- Turn an aetherSchema with fields defined with zod into a usable mongoose model */
export const createMongooseDataModel = <
  Z extends z.ZodRawShape,
  SchemaDoc = Document & z.infer<AetherSchemaInput<Z>>,
  SchemaModel = Model<SchemaDoc> & { aetherSchema: AetherSchemaInput<Z> },
>(
  schema: AetherSchemaInput<Z>,
  schemaOptions: SchemaOptions = {}
) => {
  // Error & return early if zod / aether schema is unknown
  if (!schema?.schemaName) {
    throw new Error('createMongooseDataModel() requires a named aetherSchema (did you pass a regular zod object instead?)') // prettier-ignore
  }

  // Check for existing model before creating a new one
  const existingModel = mongoose.models[schema.schemaName] as SchemaModel
  if (existingModel) {
    // @ts-ignore
    existingModel.aetherSchema = schema
    return existingModel
  }

  // prettier-ignore
  const createMongooseField = <T>(baseMongooseType: T) => (schemaKey, schemaConfig) => {
    const { isNullable, isOptional } = schemaConfig
    const isNullish = [isNullable, isOptional].includes(true)
    const mongooseField = {
      type: baseMongooseType,
      required: !isNullish,
      default: schemaConfig.defaultValue,
      description: schemaConfig.description,
    } as SchemaTypeOptions<T>
    // Provide options from schema?
    if (schemaConfig.aetherType === 'AetherEnum') {
      mongooseField.enum = Object.values(schemaConfig.schema) as SchemaTypeOptions<T>['enum']
    }
    // Return final result
    return mongooseField
  }

  // Schema is known, build mongoose schema from it
  const mongooseSchemaDefinition = aetherSchemaPlugin(schema.introspect(), {
    // -- Primitives --
    AetherString: createMongooseField(String),
    AetherNumber: createMongooseField(Number),
    AetherBoolean: createMongooseField(Boolean),
    AetherDate: createMongooseField(Date),
    // -- Single values --
    AetherId: createMongooseField(String),
    AetherColor: createMongooseField(String),
    AetherEnum: createMongooseField(String),
    // -- Objectlikes --
    AetherSchema: createMongooseField(Object),
    AetherObject: createMongooseField(Object),
    // -- Arraylikes --
    AetherArray: createMongooseField(Array),
  })

  // Create mongoose Schema from SchemaDefinition
  const mongooseSchema: Schema<SchemaDoc> = new Schema(mongooseSchemaDefinition, schemaOptions)

  // Build mongoose model
  const schemaModel = model<SchemaDoc>(schema.schemaName, mongooseSchema) as SchemaModel

  // Attach schema to model
  // @ts-ignore
  schemaModel.aetherSchema = schema

  // Return model
  return schemaModel
}
