import { aetherResolver } from 'aetherspace/utils/serverUtils'
// Schemas
import { GetResumeDataByUserSlugAPIConfig } from '../schemas/GetResumeDataByUserSlugResolver' // prettier-ignore
import { dummyResumeData } from '../mocks/resumeData.mock'

/** --- getResumeDataByUserSlug ---------------------------------------------------------------- */
/** -i- Retrieve resume data for a specific user identified through the url slug */
export const getResumeDataByUserSlug = aetherResolver(
  async ({ args, parseArgs, withDefaults, handleError }) => {
    try {
      // Args
      const { slug } = parseArgs(args)

      // -- Logic --

      // ... TODO: Add business logic ...

      // -- Respond --

      return withDefaults({
        ...dummyResumeData,
      })
    } catch (err) {
      throw handleError(err)
    }
  },
  GetResumeDataByUserSlugAPIConfig
)
