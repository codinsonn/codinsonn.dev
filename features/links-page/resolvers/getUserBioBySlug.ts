// Schemas
import { GetUserBioBySlugDataBridge } from '../schemas/GetUserBioBySlugDataBridge'
import { UserBioTable, UserIconsTable, LinksInBioTable } from '../schemas/tables'
// Utils
import { aetherResolver } from 'aetherspace/utils/serverUtils'

/** --- getUserBioBySlug() --------------------------------------------------------------- */
/** -i- Fetch all the bio page info for a specific user by their url slug */
export const getUserBioBySlug = aetherResolver(
  async ({ args, parseArgs, handleError, withDefaults }) => {
    try {
      // Args
      const { slug } = parseArgs(args)

      // Fetch bio info from airtable
      const [userBio, iconLinks, linksInBio] = await Promise.all([
        UserBioTable.aetherQueries.findOne({ slug }),
        UserIconsTable.aetherQueries.find({ userSlug: slug }),
        LinksInBioTable.aetherQueries.find({ userSlug: slug }),
      ])

      // Result
      return withDefaults({
        ...userBio,
        iconLinks,
        linksInBio,
      })
    } catch (error) {
      // -!- Temporary mock for local offline debugging
      // if (process.env.NODE_ENV !== 'production') return userBioMock
      // Handle error
      handleError(error)
    }
  },
  GetUserBioBySlugDataBridge
)
