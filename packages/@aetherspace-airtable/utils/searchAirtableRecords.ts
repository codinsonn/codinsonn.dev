import Airtable from 'airtable'
import { z } from 'aetherspace/schemas'

/** --- searchAirtableRecords() ---------------------------------------------------------------- */
/** -i- Select all records matching a specific table and filterByFormula string */
export const searchAirtableRecords = async <Z extends z.ZodRawShape>(
  airtableBase: Airtable.Base,
  tableName: string,
  schema: z.ZodObject<Z>,
  filterByFormula: string
) => {
  return (await airtableBase(tableName)
    .select({ view: 'Grid view', filterByFormula })
    .all()) as unknown as Airtable.Record<z.infer<typeof schema>>[]
}
