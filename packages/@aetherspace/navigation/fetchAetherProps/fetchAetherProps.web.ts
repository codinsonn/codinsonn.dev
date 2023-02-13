import { getBaseURL } from 'aetherspace/utils/envUtils'
import axios from 'axios'

/** --- fetchAetherProps() --------------------------------------------------------------------- */
/** -i- Fetch initial props from GraphQL, via the executable schema serverside and through post request in browsers & mobile envs */
export const fetchAetherProps = async (query: string, variables: any, baseUrl = getBaseURL()) => {
  const isServer = typeof window === 'undefined'
  if (isServer) {
    const [{ schema }, { graphql }] = await Promise.all([
      import('app/graphql/schema'),
      import('graphql'),
    ])
    const { data } = await graphql({ schema, source: query, variableValues: variables })
    return { data }
  } else {
    const { data } = await axios.post(`${baseUrl}/api/graphql`, { query, variables })
    return data
  }
}
