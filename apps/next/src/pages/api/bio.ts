// Middleware
import { withCors } from 'app/middleware'
// Resolvers
import { getUserBio } from 'app/resolvers'
// Utils
import { makeNextApiHandler, makeGraphQLResolver } from 'aetherspace/utils/serverUtils'

/* --- GraphQL --------------------------------------------------------------------------------- */

export const graphResolver = makeGraphQLResolver(getUserBio)

/* --- /api/bio/[slug] ------------------------------------------------------------------------- */

export default makeNextApiHandler(getUserBio, { middleware: [withCors] })
