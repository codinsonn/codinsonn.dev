import Airtable from 'airtable'
// Schemas
import { UserBioInput, UserBio } from 'app/schemas/UserBio.schema'
// Middleware
import { withCors } from 'app/middleware'
// Utils
import {
  aetherResolver,
  makeNextApiHandler,
  makeGraphQLResolver,
  getEnvVar,
} from 'aetherspace/utils/serverUtils'

/* --- Config ---------------------------------------------------------------------------------- */

const resolverConfig = {
  argsSchema: UserBioInput,
  responseSchema: UserBio,
}

/* --- getUserBio() ---------------------------------------------------------------------------- */

const getUserBio = aetherResolver(async ({ args }) => {
  // Args
  const { slug } = args

  // Constants
  const AIRTABLE_API_KEY = getEnvVar('AIRTABLE_API_KEY')
  const airtable = new Airtable({ apiKey: AIRTABLE_API_KEY })
  const base = airtable.base('appPKybqZMUZwR4eF')

  // Fetch bio info from airtable
  const userBioQuery = { maxRecords: 1, view: 'Grid view', filterByFormula: `{slug} = "${slug}"` }
  const userBioResponse = await base('userBio').select(userBioQuery).firstPage()
  const userFields = userBioResponse[0]?.fields || {}

  // Fetch icon links from airtable
  const userIconsQuery = { view: 'Grid view', filterByFormula: `{user} = "${slug}"` }
  const userIconsResponse = await base('userIcons').select(userIconsQuery).firstPage()
  const userIcons = userIconsResponse.map(({ fields: userIconFields }) => ({
    id: userIconFields.id,
    iconComponent: userIconFields.iconComponent?.[0],
    link: userIconFields.link,
    sortOrder: userIconFields.sortOrder,
    extraClasses: userIconFields.extraClasses?.[0] || '',
  }))

  // Result
  return {
    slug,
    title: userFields.title,
    titleLink: userFields.titleLink,
    bioText: userFields.bioText,
    imageUrl: userFields.imageUrl,
    iconLinks: userIcons,
  } as UserBio
}, resolverConfig)

/* --- GraphQL --------------------------------------------------------------------------------- */

export const graphResolver = makeGraphQLResolver(getUserBio)

/* --- /api/bio/[slug] ------------------------------------------------------------------------- */

export default makeNextApiHandler(getUserBio, { middleware: [withCors] })
