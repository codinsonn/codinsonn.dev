import axios from 'axios'
import { graphql } from 'graphql'

/* --- fetchAetherProps() ---------------------------------------------------------------------- */

export const fetchAetherProps = async (query: string, variables: any) => {
  const isServer = typeof window === 'undefined'
  if (isServer) {
    const { schema } = await import('app/graphql/schema')
    const { data } = await graphql({ schema, source: query, variableValues: variables })
    return { data }
  } else {
    const { data } = await axios.post('/api/graphql', { query, variables })
    return data
  }
}
