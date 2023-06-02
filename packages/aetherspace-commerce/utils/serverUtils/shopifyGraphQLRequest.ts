import { request } from 'graphql-request'
import { getEnvVar } from 'aetherspace/utils/serverUtils'

/* --- Types ----------------------------------------------------------------------------------- */

type TShopifyGraphQLRequestArgs = {
  query: string
  variables?: any
  customEndpoint?: string
  customHeaders?: Record<string, unknown>
}

/* --- Config ---------------------------------------------------------------------------------- */

// const SHOPIFY_STOREFRONT_API_KEY = getEnvVar('SHOPIFY_STOREFRONT_API_KEY')
// const SHOPIFY_STOREFRONT_API_SECRET = getEnvVar('SHOPIFY_STOREFRONT_API_SECRET')
const SHOPIFY_STOREFRONT_API_TOKEN = getEnvVar('SHOPIFY_STOREFRONT_API_TOKEN')

const SHOPIFY_STOREFRONT_URL = getEnvVar('SHOPIFY_STOREFRONT_URL')
const SHOPIFY_GRAPHQL_ENDPOINT = `${SHOPIFY_STOREFRONT_URL}/api/2023-04/graphql.json`

const SHOPIFY_HEADERS = {
  'Content-Type': 'application/graphql',
  'X-Shopify-Storefront-Access-Token': SHOPIFY_STOREFRONT_API_TOKEN,
}

/** --- shopifyGraphQLRequest() ---------------------------------------------------------------- */
/** -i- Performs and authenticated GraphQL request to your SHOPIFY_STOREFRONT_URL */
export const shopifyGraphQLRequest = async <T>(args: TShopifyGraphQLRequestArgs): Promise<T> => {
  try {
    // Args
    const { query, variables, customEndpoint, customHeaders } = args
    const endpoint = customEndpoint || SHOPIFY_GRAPHQL_ENDPOINT
    const headers = { ...SHOPIFY_HEADERS, ...customHeaders }

    // Request
    const response = await request(endpoint, query, variables, headers)

    // Response
    return response as T
  } catch (error) {
    console.log('-!- shopifyGraphQLRequest() -!- Error:', error)
    throw error
  }
}
