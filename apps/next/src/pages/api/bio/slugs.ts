import Airtable from 'airtable'
import { z } from 'zod'
// Middleware
import { withCors } from 'app/middleware'
// Schemas
import { aetherSchema } from 'aetherspace/schemas'
// Utils
import {
  aetherResolver,
  makeNextApiHandler,
  makeGraphQLResolver,
  getEnvVar,
} from 'aetherspace/utils/serverUtils'

/* --- Constants ------------------------------------------------------------------------------- */

const AIRTABLE_API_KEY = getEnvVar('AIRTABLE_API_KEY')
const AIRTABLE_BIO_BASE = getEnvVar('AIRTABLE_BIO_BASE')
const airtable = new Airtable({ apiKey: AIRTABLE_API_KEY })
const base = airtable.base(AIRTABLE_BIO_BASE)

/* --- Schemas --------------------------------------------------------------------------------- */

const UserBioSlugsInput = aetherSchema('UserBioSlugsInput', {
  formula: z.string().optional(),
})

const UserBioSlugs = aetherSchema('UserBioSlugs', {
  slugs: z.array(z.string()),
})

/* --- Config ---------------------------------------------------------------------------------- */

const resolverConfig = {
  argsSchema: UserBioSlugsInput,
  responseSchema: UserBioSlugs,
}

/* --- getUserSlugs() -------------------------------------------------------------------------- */

const getUserSlugs = aetherResolver(async ({ args }) => {
  // Args
  const { formula } = args

  // Fetch slugs from airtable
  const userBiosQuery = { view: 'Grid view', formula }
  const userBiosResponse = await base('userBio').select(userBiosQuery).all()
  const slugs = userBiosResponse.map(({ fields: userBioFields }) => userBioFields.slug)

  // Result
  return { slugs } as z.infer<typeof UserBioSlugs>
}, resolverConfig)

/* --- GraphQL --------------------------------------------------------------------------------- */

export const graphResolver = makeGraphQLResolver(getUserSlugs)

/* --- /api/bio/slugs -------------------------------------------------------------------------- */

export default makeNextApiHandler(getUserSlugs, { middleware: [withCors] })
