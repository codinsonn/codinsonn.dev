import Airtable from 'airtable'
// Schemas
import { z } from 'aetherspace/schemas'

/** --- fetchAllAirtableRecords() -------------------------------------------------------------- */
/** -i- Selects all records from an table for the specified base and uses .eachPage() to put them in one array */
export const fetchAllAirtableRecords = async <Z extends z.ZodRawShape>(
  airtableBase: Airtable.Base,
  tableName: string,
  schema: z.ZodObject<Z>
) => {
  const allRecords: Airtable.Record<z.infer<typeof schema>>[] = []
  await airtableBase(tableName)
    .select()
    .eachPage(
      (records, fetchNextPage) => {
        allRecords.push(...(records as unknown as Airtable.Record<z.infer<typeof schema>>[]))
        fetchNextPage()
      },
      (doneCallbackError) => {
        if (doneCallbackError) {
          throw new Error(`-!- Error fetching data from Airtable: ${doneCallbackError}`)
        }
      }
    )
  return allRecords
}
