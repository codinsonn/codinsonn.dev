import { aetherResolver } from 'aetherspace/utils/serverUtils'
import { GetResumeDataByUserSlugDataBridge } from '../schemas/GetResumeDataByUserSlugDataBridge'
import { ResumeDataModel } from '../schemas/models'
// import { dummyResumeData } from '../mocks/resumeData.mock'
import { dbConnect } from '@aetherspace/mongoose/utils'

/** --- getResumeDataByUserSlug ---------------------------------------------------------------- */
/** -i- Retrieve resume data for a specific user identified through the url slug */
export const getResumeDataByUserSlug = aetherResolver(
  async ({ args, parseArgs, withDefaults, handleError }) => {
    try {
      // Args
      const { slug } = parseArgs(args)

      // -- Connect --

      await dbConnect()

      // -- Logic --

      const resumeData = await ResumeDataModel.findOne({ slug })

      // -- Respond --

      return withDefaults(resumeData!)
    } catch (err) {
      throw handleError(err)
    }
  },
  GetResumeDataByUserSlugDataBridge
)
