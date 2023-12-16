import { aetherResolver } from 'aetherspace/utils/serverUtils'
import { TMongoUpdateResult } from '@aetherspace/mongoose/schemas'
import { UpsertResumeDataBridge } from '../schemas/UpsertResumeDataBridge'
import { ResumeDataModel } from '../schemas/models'
import { dummyResumeData } from '../mocks/resumeData.mock'
import { dbConnect } from '@aetherspace/mongoose/utils'

/* --- Constants ------------------------------------------------------------------------------- */

const MONGODB_URI = process.env.MONGODB_URI

/** --- upsertResume --------------------------------------------------------------------------- */
/** -i- Inserts or updates a resume based on the slug */
export const upsertResume = aetherResolver(
  async ({ args, parseArgs, withDefaults, handleError }) => {
    try {
      // Args
      const { slug, authKey } = parseArgs(args)

      // TODO: Actually get the resume data from the params
      const resumeData = dummyResumeData

      // -- Validate --

      if (process.env.NODE_ENV === 'production') throw new Error('This method is currently disabled in production') // prettier-ignore
      if (!MONGODB_URI) throw new Error('MONGO_DB_URI is not set')
      if (authKey !== MONGODB_URI.split('@')[1]) throw new Error('Invalid authKey')
      if (slug !== 'codinsonn') throw new Error('Currently, we only support one resume slug to be updated') // prettier-ignore

      // -- Connect --

      await dbConnect()

      // -- Upsert --

      const upsertResult = await ResumeDataModel.updateOne({ slug }, resumeData, { upsert: true }) as unknown as TMongoUpdateResult // prettier-ignore

      // -- Respond --

      const didUpsert = upsertResult.acknowledged && (!!upsertResult.upsertedCount || !!upsertResult.modifiedCount) // prettier-ignore

      return withDefaults({
        success: didUpsert,
        upsertResult,
        upsertedResume: dummyResumeData,
      })
    } catch (err) {
      throw handleError(err)
    }
  },
  UpsertResumeDataBridge
)
