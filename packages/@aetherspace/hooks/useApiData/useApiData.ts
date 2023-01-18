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
      const data = await response.json()
      return data as T
    }) as unknown as Fetcher<T, K>
  }
  // Fetch with SWR
  const { isLoading, error, ...swrResult } = useSWR<T>(endpoint, aetherFetcher)
  type SwrResponse = T | { data: T }
  const responseData = swrResult.data as unknown as SwrResponse
  const data = (responseData as { data: T })?.data || responseData
  // Return
  return { data, isLoading, error }
}

/* --- Exports --------------------------------------------------------------------------------- */

export { useApiData }
