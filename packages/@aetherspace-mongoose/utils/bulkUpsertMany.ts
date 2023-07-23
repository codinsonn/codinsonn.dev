import { Model } from 'mongoose'

/* --- Types ----------------------------------------------------------------------------------- */

export type FilterBuilder<T> = (doc: T) => Partial<T>

/** --- bulkUpsertMany() ----------------------------------------------------------------------- */
/** -i- Bulk insert or update many docs at the same time, using a filter function to check for matches */
export const bulkUpsertMany = async <T, M extends Model<any>>(
  model: M,
  docs: T[],
  filterFn: FilterBuilder<T>
) => {
  const bulkOps = docs.map((doc) => ({
    updateOne: {
      filter: filterFn(doc),
      update: { $set: doc },
      upsert: true,
    },
  }))
  // @ts-ignore
  return await model.bulkWrite(bulkOps)
}
