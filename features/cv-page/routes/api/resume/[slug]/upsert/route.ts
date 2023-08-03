// Resolvers
import { upsertResume } from '../../../../../resolvers/upsertResume'
// Utils
import { makeNextRouteHandler, makeGraphQLResolver } from 'aetherspace/utils/serverUtils'

/** --- /api/resume/[slug]/upsert -------------------------------------------------------------- */

export const GET = makeNextRouteHandler(upsertResume)

export const POST = makeNextRouteHandler(upsertResume)

/* --- GraphQL -------------------------------------------------------------------------------- */

export const graphResolver = makeGraphQLResolver(upsertResume)
