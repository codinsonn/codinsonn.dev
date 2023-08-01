// Resolvers
import { getResumeDataByUserSlug } from '../../../../resolvers/getResumeDataByUserSlug'
// Utils
import { makeNextRouteHandler, makeGraphQLResolver } from 'aetherspace/utils/serverUtils'

/** --- /api/resume/[slug] --------------------------------------------------------------------- */

export const GET = makeNextRouteHandler(getResumeDataByUserSlug)

export const POST = makeNextRouteHandler(getResumeDataByUserSlug)

/* --- GraphQL -------------------------------------------------------------------------------- */

export const graphResolver = makeGraphQLResolver(getResumeDataByUserSlug)
