import type { FieldSet, Table, Record as AirtableRecord, Base as AirtableBase } from 'airtable'
import { z } from 'aetherspace/schemas'
import type { AetherFilter } from '../utils'
import * as utils from '../utils'

/* --- Types ------------------------------------------------------------------------------------- */

export type AetherSchemaInput<Z extends z.ZodRawShape> = z.ZodObject<Z>
export type AetherTableOutput<Z extends z.ZodRawShape> = Table<FieldSet> & {
  aetherSchema: AetherSchemaInput<Z>
  fetchAllRecords: () => Promise<AirtableRecord<z.infer<z.ZodObject<Z>>>[]>
  searchRecords: (query: string) => Promise<AirtableRecord<z.infer<z.ZodObject<Z>>>[]>
  findOneRecord: (query: string) => Promise<AirtableRecord<z.infer<z.ZodObject<Z>>> | undefined>
  parseRecord: (record: AirtableRecord<z.infer<z.ZodObject<Z>>>) => z.infer<z.ZodObject<Z>>
  parseFields: (fields: AirtableRecord<z.infer<z.ZodObject<Z>>>['fields']) => z.infer<z.ZodObject<Z>> // prettier-ignore
  aetherQueries: {
    find: <T = z.infer<z.ZodObject<Z>>>(
      filters: AetherFilter<T>
    ) => Promise<z.infer<z.ZodObject<Z>>[]>
    findOne: <T = z.infer<z.ZodObject<Z>>>(
      filter: AetherFilter<T>
    ) => Promise<z.infer<z.ZodObject<Z>>>
  }
}

/** --- aetherSchemaToAirtable() --------------------------------------------------------------- */
/** -i- Turn an aetherSchema, airtable base and table name into a typed table object with helper methods attached */
export const aetherSchemaToAirtable = <Z extends z.ZodRawShape>(
  tableName: string,
  base: AirtableBase,
  schema: AetherSchemaInput<Z>
) => {
  // Create table object
  const table = base(tableName) as unknown as AetherTableOutput<Z>

  // Attach aetherSchema
  table.aetherSchema = schema

  // Attach general helper methods
  table.fetchAllRecords = () => utils.fetchAllAirtableRecords(base, tableName, schema)
  table.searchRecords = (query) => utils.searchAirtableRecords(base, tableName, schema, query)
  table.findOneRecord = (query) => utils.findOneAirtableRecord(base, tableName, schema, query)
  table.parseRecord = (record) => utils.parseRecord(record, schema)
  table.parseFields = (fields) => utils.parseFields(fields, schema)

  // Attach aether query support (mongoose-like queries and filter support such as $or, $and, $gte, ...)
  const find = async <T = z.infer<z.ZodObject<Z>>>(filters: AetherFilter<T>) => {
    const query = utils.aetherQueryToFilterFormula<T>(filters)
    const records = await table.searchRecords(query)
    return records.map((record) => utils.parseRecord(record, schema))
  }
  const findOne = async <T = z.infer<z.ZodObject<Z>>>(filters: AetherFilter<T>) => {
    const query = utils.aetherQueryToFilterFormula<T>(filters)
    const record = await table.findOneRecord(query)
    return utils.parseRecord(record!, schema)
  }
  table.aetherQueries = { find, findOne }

  // Return table object
  return table
}
