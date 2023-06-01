// Resolvers
import { getShopifyProducts } from '../../../../../resolvers'
// Utils
import { makeNextRouteHandler, makeGraphQLResolver } from 'aetherspace/utils/serverUtils'

/* --- /api/aetherspace/commerce/products ------------------------------------------------------ */

export const GET = makeNextRouteHandler(getShopifyProducts)

export const POST = makeNextRouteHandler(getShopifyProducts)

/* --- GraphQL --------------------------------------------------------------------------------- */

export const graphResolver = makeGraphQLResolver(getShopifyProducts)
