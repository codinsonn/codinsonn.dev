import { useMemo, useState } from 'react'
import { graphql, GraphQLSchema } from 'graphql'
import axios from 'axios'
// Hooks
import { useApiData } from '../useApiData'
import { useAetherContext } from '../../context/AetherContextManager/useAetherContext'
import { getDebuggerURL, getEnvVar } from '../../utils/envUtils'

/* --- Types ----------------------------------------------------------------------------------- */

type Options = {
  gqlPath?: string
  importSchema?: Promise<GraphQLSchema>
}

/** --- useGraphQL() --------------------------------------------------------------------------- */
/** -i- Perform an isomorphic graphql request on server or client side */
export const useGraphQL = <T>(
  query: string,
  variables: Record<string, unknown> = {},
  options: Options = {}
) => {
  // State
  const [cachedData, setCachedData] = useState<T | null>(null)

  // Props
  const { gqlPath = '/api/graphql' } = options

  // Vars
  const APP_LINKS: string[] = useMemo(() => getEnvVar('APP_LINKS')?.split('|') || [], [])
  const [webDomain] = APP_LINKS.filter((link) => link.includes('://'))
  const backendURL = useMemo(() => getEnvVar('BACKEND_URL') || getDebuggerURL(3000) || webDomain, []) // prettier-ignore
  const shouldUseCustomPath = !backendURL || gqlPath.includes('://')
  const gqlEndpoint = shouldUseCustomPath ? gqlPath : `${backendURL}${gqlPath}`

  // Context
  const { importSchema: importContextSchema } = useAetherContext()

  // Fetcher
  const gqlFetcher = async () => {
    const isServer = !!options.importSchema || typeof importContextSchema !== 'undefined'
    if (isServer) {
      const importSchema = options.importSchema || importContextSchema?.()
      if (!importSchema) throw new Error('importSchema() function is required on server side')
      const schema = await importSchema
      try {
        const { data } = await graphql({ schema, source: query, variableValues: variables })
        console.log(JSON.stringify(data, null, 2))
        return data as T
      } catch (error) {
        console.log('-!- Error fetching data from executable graphql schema', error)
        throw error
      }
    } else {
      if (cachedData) return cachedData
      try {
        const headers = { 'Content-Type': 'application/json' }
        const { data } = await axios.post<T>(gqlEndpoint, { query, variables }, { headers })
        setCachedData(data as T)
        return data as T
      } catch (error) {
        console.log('-!- Error fetching data from graphql endpoint:', error)
        throw error
      }
    }
  }

  // Vars
  const { data, isLoading, error } = useApiData<T>(gqlEndpoint, gqlFetcher)

  // Return
  return { data, isLoading, error }
}
