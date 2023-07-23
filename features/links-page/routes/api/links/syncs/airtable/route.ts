// Resolvers
import { syncUserBiosFromAirtable } from '../../../../../resolvers/syncUserBiosFromAirtable'
// Utils
import { makeNextRouteHandler, makeGraphQLResolver } from 'aetherspace/utils/serverUtils'

/** --- /api/links/syncs/airtable -------------------------------------------------------------- */

export const GET = makeNextRouteHandler(syncUserBiosFromAirtable)

export const POST = makeNextRouteHandler(syncUserBiosFromAirtable)

/* --- GraphQL -------------------------------------------------------------------------------- */

export const graphResolver = makeGraphQLResolver(syncUserBiosFromAirtable)
