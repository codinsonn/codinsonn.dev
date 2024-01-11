import { Middleware } from 'swr'
import { getEnvList, getEnvVar, getGlobal, setGlobal } from 'aetherspace/utils'
import type { AetherFetcherOptions } from 'aetherspace/navigation'
import axios from 'axios'

/** --- swrClerkAuthMiddleware() --------------------------------------------------------------- */
/** -i- SWR middleware to add Clerk's auth token to fetchers headers */
export const swrClerkAuthMiddleware: Middleware = (useSWRNext) => {
  return (key, fetcher, config) => {
    const extendedFetcher = async (firstArg, ...args: unknown[]) => {
      const getAuthToken = getGlobal('getAuthToken') // @ts-ignore
      const isAetherFetcher = fetcher?.isAetherFetcher || firstArg?.[1]?.isAetherFetcher
      const isFirstArgArray = Array.isArray(firstArg)
      const isSafeToMutateFirstArg = isFirstArgArray && firstArg.length === 2
      const [fetcherOptions, ...restArgs] = args as [AetherFetcherOptions, ...unknown[]]
      const hasHeadersConfig = !!fetcherOptions?.headers
      const hasVariablesConfig = !!fetcherOptions?.variables
      const isSafeToMutateArgs = isAetherFetcher || hasHeadersConfig || hasVariablesConfig || isSafeToMutateFirstArg // prettier-ignore
      // Retrieve the auth token?
      const hasAuthTokenGetter = typeof getAuthToken === 'function'
      const authToken = hasAuthTokenGetter ? await getAuthToken() : null
      const Authorization = authToken ? `Bearer ${authToken}` : null
      // Add the header as an axios header if not already defined?
      const prevAxiosRequestInterceptor = getGlobal('axiosRequestInterceptor')
      if (prevAxiosRequestInterceptor !== undefined) {
        axios.interceptors.request.eject(prevAxiosRequestInterceptor)
      }
      if (Authorization) {
        // Add the new interceptor
        // -i- TODO: Find a better fallback. This might not work for all cases.
        const newAxiosRequestInterceptor = axios.interceptors.request.use(
          (request) => {
            // Only apply to internal requests
            const APP_LINKS = getEnvList('APP_LINKS').filter((url) => url.includes('http')) || []
            const BACKEND_URL = getEnvVar('BACKEND_URL')
            const internalLinks = [...APP_LINKS, BACKEND_URL].filter(Boolean)
            const isInternalRequest = internalLinks.some((url) => request.url?.includes(url))
            if (isInternalRequest) {
              // Add the header if an Authorization header is not already defined
              const reqHeaderAuth = request.headers['Authorization']
              request.headers['Authorization'] = reqHeaderAuth || Authorization
            }
            return request
          },
          (error) => Promise.reject(error)
        )
        setGlobal('axiosRequestInterceptor', newAxiosRequestInterceptor)
      }
      // Add the headers as the second arg?
      if (Authorization && isSafeToMutateArgs) {
        const fetcherOptionHeaders = fetcherOptions?.headers || {}
        const newHeaders = { ...fetcherOptionHeaders, Authorization }
        const newFetcherOptions = { ...fetcherOptions, headers: newHeaders }
        return await fetcher!(key, newFetcherOptions, ...restArgs)
      }
      // Keep and use the fetcher as-is
      return await fetcher!(key, ...args)
    }
    return useSWRNext(key, extendedFetcher, config)
  }
}
