import Airtable from 'airtable'
import { z } from 'aetherspace/schemas'

/** --- findOneAirtableRecord() ---------------------------------------------------------------- */
/** -i- Finds all matches for a specific table and filterByFormula string and returns the first result */
export const findOneAirtableRecord = async <Z extends z.ZodRawShape>(
  airtableBase: Airtable.Base,
  tableName: string,
  schema: z.ZodObject<Z>,
  filterByFormula: string
) => {
  const [result] = (await airtableBase(tableName)
    .select({ maxRecords: 1, view: 'Grid view', filterByFormula })
    .firstPage()) as unknown as Airtable.Record<z.infer<typeof schema>>[]
  return result
}
