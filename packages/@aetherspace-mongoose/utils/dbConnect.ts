import mongoose, { ConnectOptions } from 'mongoose'
import { getEnvVar } from 'aetherspace/utils'

/* --- Constants & Caches ---------------------------------------------------------------------- */

const MONGODB_URI = getEnvVar('MONGODB_URI')

let cached = global.mongoose as { conn: typeof mongoose | null; promise: Promise<typeof mongoose> | null } // prettier-ignore
if (!cached) cached = global.mongoose = { conn: null, promise: null }

/** --- dbConnect() ---------------------------------------------------------------------------- */
/** -i- Connect to mongodb before executing your back-end resolvers */
export const dbConnect = async (options: ConnectOptions = {}) => {
  // Return if already connected
  if (cached.conn) {
    if (mongoose.connection.readyState === 1) {
      return cached.conn
    } else {
      cached.conn.connection.close()
      cached.conn = null
      cached.promise = null
    }
  }

  // Connect to mongodb
  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, options)
      .then((mongoose) => {
        process.on('SIGINT', async () => {
          await mongoose.connection.close()
          console.log('-i- Mongoose default connection disconnected through app termination')
          process.exit(0)
        })
        return mongoose
      })
      .catch((error) => {
        console.error('-!- Error connecting to MongoDB:', error)
        throw error
      })
  }

  // Await and return connection
  cached.conn = await cached.promise
  return cached.conn
}
