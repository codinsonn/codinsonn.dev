import { aetherResolver } from 'aetherspace/utils/serverUtils'
import { GetResumeDataByUserSlugDataBridge } from '../schemas/GetResumeDataByUserSlugDataBridge'
import { ResumeDataModel } from '../models/ResumeDataModel'
import { dummyResumeData } from '../mocks/resumeData.mock'
import { dbConnect } from '@aetherspace/mongoose/utils'

/** --- getResumeDataByUserSlug ---------------------------------------------------------------- */
/** -i- Retrieve resume data for a specific user identified through the url slug */
export const getResumeDataByUserSlug = aetherResolver(
  async ({ args, parseArgs, withDefaults, handleError }) => {
    try {
      // Args
      const { slug } = parseArgs(args)

      // -- Connect --

      // await dbConnect()

      // -- Logic --

      // const resumeData = await ResumeDataModel.findOne({ slug })
      // if (!resumeData) throw handleError('Resume data not found', true)

      // -- Respond --

      // return withDefaults(resumeData!.toObject())

      return withDefaults(dummyResumeData)

    } catch (err) {
      throw handleError(err)
    }
  },
  GetResumeDataByUserSlugDataBridge
)
