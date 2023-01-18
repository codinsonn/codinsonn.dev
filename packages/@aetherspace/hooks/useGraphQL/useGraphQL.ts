import { useMemo } from 'react'
import { GraphQLSchema } from 'graphql'
import axios from 'axios'
// Hooks
import { useApiData } from '../useApiData'
// Utils
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

  // Fetcher
  const gqlFetcher = async () => {
    const headers = { 'Content-Type': 'application/json' }
    const { data } = await axios.post<T>(gqlEndpoint, { query, variables }, { headers })
    return data
  }

  // Vars
  const { data, isLoading, error } = useApiData<T>(gqlEndpoint, gqlFetcher)

  // Return
  return { data: data as T, isLoading, error }
}
