// Schemas
import { UserBioInput, UserBio } from '../schemas'
import { UserBioTable, UserIconsTable, LinksInBioTable } from '../schemas/tables'
// Utils
import { aetherResolver } from 'aetherspace/utils/serverUtils'

/* --- Config ---------------------------------------------------------------------------------- */

const resolverConfig = {
  argsSchema: UserBioInput,
  responseSchema: UserBio,
}

/** --- getUserBioFromAirtable() --------------------------------------------------------------- */
/** -i- Fetch all the bio page info for a specific user by their url slug */
export const getUserBioFromAirtable = aetherResolver(
  async ({ args, handleError, withDefaults }) => {
    try {
      // Args
      const { slug } = UserBioInput.parse(args)

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
  resolverConfig
)
