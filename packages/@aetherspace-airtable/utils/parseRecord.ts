// Types
import type { Record as AirtableRecord } from 'airtable'
// Schemas
import { z } from 'aetherspace/schemas'

/* --- Types ------------------------------------------------------------------------------------- */

type AetherSchemaInput<Z extends z.ZodRawShape> = z.ZodObject<Z>

/** --- parseFields() ---------------------------------------------------------------------- */
/** -i- Check the schema for whether or not fields are supposed to be array or just the first item */
export const parseFields = <Z extends z.ZodRawShape>(
  fields: AirtableRecord<z.infer<z.ZodObject<Z>>>['fields'],
  schema: AetherSchemaInput<Z>
) => {
  const parsedRecord = { ...fields }
  Object.entries(schema.shape).forEach(([fieldName, fieldSchema]) => {
    // @ts-ignore
    const isSupposedToBeArray = fieldSchema.aetherType === 'AetherArray'
    if (!isSupposedToBeArray && Array.isArray(parsedRecord[fieldName])) {
      parsedRecord[fieldName] = parsedRecord[fieldName]?.[0]
    } else if (isSupposedToBeArray && !Array.isArray(parsedRecord[fieldName])) {
      parsedRecord[fieldName] = [parsedRecord[fieldName]].filter(Boolean)
    }
  })
  return schema.parse(parsedRecord)
}

/** --- parseRecord() ---------------------------------------------------------------------- */
/** -i- Check the schema for whether or not fields are supposed to be array or just the first item */
export const parseRecord = <Z extends z.ZodRawShape>(
  record: AirtableRecord<z.infer<z.ZodObject<Z>>>,
  schema: AetherSchemaInput<Z>
) => parseFields(record.fields, schema)
