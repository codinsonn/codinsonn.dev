import Airtable from 'airtable'
import { z } from 'aetherspace/schemas'

/** --- fetchAllAirtableRecords() -------------------------------------------------------------- */
/** -i- Selects all records from an table for the specified base and uses .eachPage() to put them in one array */
export const fetchAllAirtableRecords = <Z extends z.ZodRawShape>(
  airtableBase: Airtable.Base,
  tableName: string,
  schema: z.ZodObject<Z>
) => {
  return new Promise<Airtable.Record<z.infer<typeof schema>>[]>((resolve, reject) => {
    const allRecords: Airtable.Record<z.infer<typeof schema>>[] = []
    airtableBase(tableName)
      .select({ view: 'Grid view' })
      .eachPage(
        async (records, fetchNextPage) => {
          allRecords.push(...(records as unknown as Airtable.Record<z.infer<typeof schema>>[]))
          fetchNextPage()
        },
        (doneCallbackError) => {
          if (doneCallbackError) {
            const errorMessage = doneCallbackError.message || doneCallbackError
            return reject(new Error(`-!- Error fetching data from Airtable: ${errorMessage}`))
          } else {
            return resolve(allRecords)
          }
        }
      )
  })
}
