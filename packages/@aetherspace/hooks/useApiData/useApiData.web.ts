import { use, cache, useMemo } from 'react'
// Utils
import { getEnvVar } from '../../utils'

/* --- useApiData() ---------------------------------------------------------------------------- */

const useApiData = <T, K extends string = string>(endpoint: K, fetcher?: Promise<T>) => {
  // Vars
  const APP_LINKS: string[] = useMemo(() => getEnvVar('APP_LINKS')?.split('|') || [], [])
  const [webDomain] = APP_LINKS.filter((link) => link.includes('://'))
  const backendURL = useMemo(() => getEnvVar('BACKEND_URL') || webDomain || 'http://localhost:3000', []) // prettier-ignore
  // Determine fetcher
  let aetherFetcher = fetcher
  if (!aetherFetcher) {
    const baseURL = endpoint.includes('://') ? '' : backendURL
    aetherFetcher = cache(async () => {
      const fetchEndpoint = `${baseURL}${endpoint}`
      const response = await fetch(fetchEndpoint)
      const data = await response.json()
      return data as T
    }) as unknown as Promise<T>
  }
  // @ts-ignore
  const data = use<T>(aetherFetcher())
  // Return
  return { data, isLoading: false, error: null }
}

/* --- Exports --------------------------------------------------------------------------------- */

export { useApiData }
