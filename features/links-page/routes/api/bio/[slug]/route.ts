// Resolvers
import { getUserBio } from '../../../../resolvers'
// Utils
import { makeNextRouteHandler, makeGraphQLResolver } from 'aetherspace/utils/serverUtils'

/* --- /api/bio/[slug] ------------------------------------------------------------------------- */

export const GET = makeNextRouteHandler(getUserBio)

export const POST = makeNextRouteHandler(getUserBio)

/* --- GraphQL --------------------------------------------------------------------------------- */

export const graphResolver = makeGraphQLResolver(getUserBio)
