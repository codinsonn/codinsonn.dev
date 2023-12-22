import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  MongoUpdateResult: `https://mongodb.github.io/node-mongodb-native/4.9/interfaces/UpdateResult.html`,
}

/** --- MongoUpdateResult ---------------------------------------------------------------------- */
/** -i- https://mongodb.github.io/node-mongodb-native/4.9/interfaces/UpdateResult.html */
export const MongoUpdateResult = aetherSchema('MongoUpdateResult', {
  acknowledged: z.boolean(),
  matchedCount: z.number(),
  modifiedCount: z.number(),
  upsertedCount: z.number(),
  upsertedId: z.string().optional(),
}).describe(d.MongoUpdateResult)

/** -i- https://mongodb.github.io/node-mongodb-native/4.9/interfaces/UpdateResult.html */
export type MongoUpdateResult = z.infer<typeof MongoUpdateResult>
