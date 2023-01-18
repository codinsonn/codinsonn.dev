import { useMemo } from 'react'
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
    const isServer = typeof window === 'undefined'
    if (isServer) {
      const importSchema = options.importSchema || importContextSchema?.()
      if (!importSchema) throw new Error('importSchema() function is required on server side')
      const schema = await importSchema
      const { data } = await graphql({ schema, source: query, variableValues: variables })
      return data as T
    } else {
      const headers = { 'Content-Type': 'application/json' }
      const { data } = await axios.post<T>(gqlEndpoint, { query, variables }, { headers })
      return data
    }
  }

  // Vars
  const { data, isLoading, error } = useApiData<T>(gqlEndpoint, gqlFetcher)

  // Return
  return { data, isLoading, error }
}
