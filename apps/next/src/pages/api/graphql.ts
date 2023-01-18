import { ApolloServer } from 'apollo-server-micro'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'
// Types
import type { NextApiRequest, NextApiResponse } from 'next'
// Schemas
import { schemaDefs } from 'app/graphql/schema'
// Resolvers
import { withCors } from 'app/middleware'
import { runMiddleWare } from 'aetherspace/utils/serverUtils'

/* --- Debug ----------------------------------------------------------------------------------- */

// const graphqlHandler = (req: any, res: any) => {
//   const schema = aetherGraphSchema(resolvers as unknown as ResolverMapType)
//   return res.status(200).json({
//     queries: Object.keys(schema.resolvers.Query || {}),
//     mutations: Object.keys(schema.resolvers.Mutations || {}),
//     schema: schema.typeDefs,
//   })
// }

/* --- /api/graphql ---------------------------------------------------------------------------- */

// Create Apollo Server with schema
const apolloServer = new ApolloServer({
  typeDefs: schemaDefs.typeDefs,
  resolvers: schemaDefs.resolvers,
  context: ({ req, res }) => ({ req, res }),
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground],
  introspection: true,
})

// @ts-ignore
await apolloServer.start() // Required to make ApolloServer work
const graphqlHandler = apolloServer.createHandler({ path: '/api/graphql' })

/* --- Handler --------------------------------------------------------------------------------- */

const apiHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  await runMiddleWare(req, res, withCors)
  return graphqlHandler(req, res)
}

/* --- API Config ------------------------------------------------------------------------------ */

// Config needs to be exported because we are changing default values in Next.JS API https://nextjs.org/docs/api-routes/api-middlewares
// This is required for GraphQL to work properly  https://blog.logrocket.com/building-a-graphql-server-in-next-js/
export const config = {
  api: {
    bodyParser: false,
  },
}

/* --- Exports --------------------------------------------------------------------------------- */

export default apiHandler
