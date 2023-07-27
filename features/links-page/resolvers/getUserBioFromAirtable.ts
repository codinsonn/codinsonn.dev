import Airtable from 'airtable'
// Schemas
import { UserBioInput, UserBio, IconLink, LinkInBio } from '../schemas'
// Mocks
import { userBioMock } from '../mocks/userBio.mock'
// Utils
import { searchAirtableRecords } from '@aetherspace/airtable/utils'
import { aetherResolver, getEnvVar } from 'aetherspace/utils/serverUtils'

/* --- Config ---------------------------------------------------------------------------------- */

const resolverConfig = {
  argsSchema: UserBioInput,
  responseSchema: UserBio,
}

/* --- Constants ------------------------------------------------------------------------------- */

const AIRTABLE_API_KEY = getEnvVar('AIRTABLE_API_KEY')
const AIRTABLE_BIO_BASE = getEnvVar('AIRTABLE_BIO_BASE')

/* --- getUserBioFromAirtable() ---------------------------------------------------------------- */

export const getUserBioFromAirtable = aetherResolver(
  async ({ args, handleError, withDefaults }) => {
    try {
      // Args
      const { slug } = UserBioInput.parse(args)

      // Constants
      const airtable = new Airtable({ apiKey: AIRTABLE_API_KEY })
      const airtableBase = airtable.base(AIRTABLE_BIO_BASE)

      // Build Airtable queries
      const userBioQuery = {
        maxRecords: 1,
        view: 'Grid view',
        filterByFormula: `{slug} = "${slug}"`,
      }

      // Fetch bio info from airtable
      const [userBioResponse, userIconsResponse, linksInBioResponse] = await Promise.all([
        airtableBase('userBio').select(userBioQuery).firstPage(),
        searchAirtableRecords(airtableBase, 'userIcons', IconLink, `{userSlug} = "${slug}"`),
        searchAirtableRecords(airtableBase, 'userLinks', LinkInBio, `{userSlug} = "${slug}"`),
      ])

      // Extract fields from responses
      const userIcons = userIconsResponse.map(({ fields: userIconFields }) => {
        return IconLink.applyDefaults({
          id: userIconFields.id,
          linkUrl: userIconFields.linkUrl,
          linkIconKey: userIconFields.linkIconKey?.[0],
          sortOrder: userIconFields.sortOrder,
          extraClasses: userIconFields.extraClasses?.[0] || '',
        })
      })
      const userLinks = linksInBioResponse.map(({ fields: linkInBioFields }) => {
        return LinkInBio.applyDefaults({
          id: linkInBioFields.id,
          linkUrl: linkInBioFields.linkUrl,
          linkTitle: linkInBioFields.linkTitle,
          subTitle: linkInBioFields.subTitle,
          imageUrl: linkInBioFields.imageUrl,
          linkIconKey: linkInBioFields.linkIconKey?.[0] || '',
          isFeatured: linkInBioFields.isFeatured,
        })
      })
      const userData = UserBio.applyDefaults({
        ...userBioResponse[0]?.fields,
        iconLinks: userIcons,
        linksInBio: userLinks,
      })

      // Result
      return withDefaults(userData)
    } catch (error) {
      // -!- Temporary mock for local offline debugging
      if (process.env.NODE_ENV !== 'production') return userBioMock
      // Handle error
      handleError(error)
    }
  },
  resolverConfig
)
