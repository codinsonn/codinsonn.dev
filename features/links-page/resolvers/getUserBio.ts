import Airtable from 'airtable'
// Schemas
import { UserBioInput, UserBio } from '../schemas/UserBio.schema'
// Mocks
import { userBioMock } from '../mocks/userBio.mock'
// Utils
import { aetherResolver, getEnvVar } from 'aetherspace/utils/serverUtils'

/* --- Config ---------------------------------------------------------------------------------- */

const resolverConfig = {
  argsSchema: UserBioInput,
  responseSchema: UserBio,
}

/* --- getUserBio() ---------------------------------------------------------------------------- */

export const getUserBio = aetherResolver(async ({ args, handleError }) => {
  try {
    // Args
    const { slug } = UserBioInput.parse(args)

    // Constants
    const AIRTABLE_API_KEY = getEnvVar('AIRTABLE_API_KEY')
    const airtable = new Airtable({ apiKey: AIRTABLE_API_KEY })
    const base = airtable.base('appPKybqZMUZwR4eF')

    // Determines Airtable queries
    const userBioQuery = { maxRecords: 1, view: 'Grid view', filterByFormula: `{slug} = "${slug}"` }
    const userIconsQuery = { view: 'Grid view', filterByFormula: `{user} = "${slug}"` }
    const userLinksQuery = { view: 'Grid view', filterByFormula: `{user} = "${slug}"` }

    // Fetch bio info from airtable
    const [userBioResponse, userIconsResponse, linksInBioResponse] = await Promise.all([
      base('userBio').select(userBioQuery).firstPage(),
      base('userIcons').select(userIconsQuery).firstPage(),
      base('userLinks').select(userLinksQuery).firstPage(),
    ])

    // Extract fields from responses
    const userFields = userBioResponse[0]?.fields || {}
    const userIcons = userIconsResponse.map(({ fields: userIconFields }) => ({
      id: userIconFields.id,
      iconComponent: userIconFields.iconComponent?.[0],
      link: userIconFields.link,
      sortOrder: userIconFields.sortOrder,
      extraClasses: userIconFields.extraClasses?.[0] || '',
    }))
    const userLinks = linksInBioResponse.map(({ fields: linkInBioFields }) => ({
      id: linkInBioFields.id,
      title: linkInBioFields.title,
      subTitle: linkInBioFields.subTitle,
      link: linkInBioFields.link,
      imageUrl: linkInBioFields.imageUrl,
      iconComponent: linkInBioFields.iconComponent?.[0] || '',
      isFeatured: linkInBioFields.isFeatured,
    }))

    // Result
    return {
      slug,
      title: userFields.title,
      titleLink: userFields.titleLink,
      bioText: userFields.bioText,
      imageUrl: userFields.imageUrl,
      iconLinks: userIcons,
      linksInBio: userLinks,
    } as UserBio
  } catch (error) {
    // -!- Temporary mock for local offline debugging
    if (process.env.NODE_ENV !== 'production') return userBioMock
    // Handle error
    handleError(error)
  }
}, resolverConfig)