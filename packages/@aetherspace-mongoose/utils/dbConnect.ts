import mongoose, { ConnectOptions } from 'mongoose'
// Utils
import { getEnvVar } from 'aetherspace/utils'

/* --- Constants & Caches ---------------------------------------------------------------------- */

const MONGODB_URI = getEnvVar('MONGODB_URI')

let cached = global.mongoose as { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } // prettier-ignore
if (!cached) cached = global.mongoose = { conn: null, promise: null }

/** --- dbConnect() ---------------------------------------------------------------------------- */
/** -i- Connect to mongodb before executing your back-end resolvers */
export const dbConnect = async () => {
  // Return if already connected
  if (cached.conn) return cached.conn

  // Connect to mongodb
  if (!cached.promise) {
    const options: ConnectOptions = {}
    cached.promise = mongoose.connect(MONGODB_URI, options).then((mongoose) => {
      return mongoose
    })
  }

  // Await and return connection
  cached.conn = await cached.promise
  return cached.conn
}
