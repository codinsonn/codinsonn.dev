// Resolvers
import { getUserBioBySlug } from '../../../../resolvers'
// Utils
import { makeNextRouteHandler, makeGraphQLResolver } from 'aetherspace/utils/serverUtils'

/* --- /api/bio/[slug] ------------------------------------------------------------------------- */

export const GET = makeNextRouteHandler(getUserBioBySlug)

export const POST = makeNextRouteHandler(getUserBioBySlug)

/* --- GraphQL --------------------------------------------------------------------------------- */

export const graphResolver = makeGraphQLResolver(getUserBioBySlug)
