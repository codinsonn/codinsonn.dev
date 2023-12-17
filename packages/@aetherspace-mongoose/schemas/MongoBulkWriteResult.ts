import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  MongoBulkWriteResult: `The bulk write result from bulk mongodb write operations`,
}

/** --- MongoBulkWriteResult ------------------------------------------------------------------- */
/** -i- https://www.mongodb.com/docs/manual/reference/method/db.collection.bulkWrite/ */
export const MongoBulkWriteResult = aetherSchema('MongoBulkWriteResult', {
  insertedCount: z.number().default(0),
  matchedCount: z.number().default(0),
  modifiedCount: z.number().default(0),
  deletedCount: z.number().default(0),
  upsertedCount: z.number().default(0),
  // TODO: Add AetherRecord to 'aetherspace/schemas'
  // upsertedIds: z.record(z.string()).default({}),
  // insertedIds: z.record(z.string()).default({}),
}).describe(d.MongoBulkWriteResult)

/** -i- https://www.mongodb.com/docs/manual/reference/method/db.collection.bulkWrite/ */
export type MongoBulkWriteResult = z.infer<typeof MongoBulkWriteResult>
