import { useMemo } from 'react'
import useSWR, { Fetcher } from 'swr'
// Utils
import { getDebuggerURL, getEnvVar } from '../../utils'

/* --- useApiData() ---------------------------------------------------------------------------- */

const useApiData = <T, K extends string = string>(endpoint: K, fetcher?: Fetcher<T, K>) => {
  // Vars
  const APP_LINKS: string[] = useMemo(() => getEnvVar('APP_LINKS')?.split('|') || [], [])
  const [webDomain] = APP_LINKS.filter((link) => link.includes('://'))
  const backendURL = useMemo(() => getEnvVar('BACKEND_URL') || getDebuggerURL(3000) || webDomain, []) // prettier-ignore
  // Determine fetcher
  let aetherFetcher = fetcher
  if (!aetherFetcher) {
    const baseURL = endpoint.includes('://') ? '' : backendURL
    aetherFetcher = (async () => {
      const fetchEndpoint = `${baseURL}${endpoint}`
      const response = await fetch(fetchEndpoint)
      const data = (await response.json()) as T
      return data
    }) as unknown as Fetcher<T, K>
  }
  // Fetch with SWR
  const { data, isLoading, error } = useSWR<T>(endpoint, aetherFetcher)
  // Return
  return { data, isLoading, error }
}

/* --- Exports --------------------------------------------------------------------------------- */

export { useApiData }
