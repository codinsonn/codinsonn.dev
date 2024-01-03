import { getRequestContext } from '../../../resolvers/getRequestContext'
import { makeNextRouteHandler, makeGraphQLResolver } from 'aetherspace/utils/serverUtils'

/** --- /api/context --------------------------------------------------------------------------- */

export const GET = makeNextRouteHandler(getRequestContext)

/* --- GraphQL --------------------------------------------------------------------------------- */

export const graphResolver = makeGraphQLResolver(getRequestContext)
