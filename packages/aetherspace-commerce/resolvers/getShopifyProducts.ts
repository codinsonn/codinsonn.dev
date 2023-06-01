import { z, aetherSchema } from 'aetherspace/schemas'
import { aetherResolver, getEnvVar } from 'aetherspace/utils/serverUtils'
// Schemas
import { ShopifyProduct } from '../schemas/ShopifyProduct'

/* --- Schemas --------------------------------------------------------------------------------- */

const GetShopifyProductsArgs = aetherSchema('GetShopifyProductsArgs', {
  first: z.number().int().default(250),
})

const GetShopifyProductsResponse = aetherSchema('GetShopifyProductsResponse', {
  products: z.object({
    edges: z.array(
      z.object({
        node: ShopifyProduct,
      })
    ),
  }),
})

const GetShopifyProductsTestResponse = aetherSchema('GetShopifyProductsTestResponse', {
  first: z.number().int().nullish(),
  GQL_ENDPOINT: z.string().nullish(),
})

/* --- Config ---------------------------------------------------------------------------------- */

const SHOPIFY_STOREFRONT_API_KEY = getEnvVar('SHOPIFY_STOREFRONT_API_KEY')
const SHOPIFY_STOREFRONT_API_SECRET = getEnvVar('SHOPIFY_STOREFRONT_API_SECRET')
const SHOPIFY_STOREFRONT_API_TOKEN = getEnvVar('SHOPIFY_STOREFRONT_API_TOKEN')
const SHOPIFY_STOREFRONT_URL = getEnvVar('SHOPIFY_STOREFRONT_URL')

const resolverConfig = {
  argsSchema: GetShopifyProductsArgs,
  responseSchema: GetShopifyProductsTestResponse,
  // responseSchema: GetShopifyProductsResponse,
}

/** --- getShopifyProducts() ------------------------------------------------------------------- */
/** -i- Resolver to get products from the Shopify GraphQL API */
export const getShopifyProducts = aetherResolver(async ({ args }) => {
  try {
    // Args
    const { first } = args

    // Vars
    const GQL_ENDPOINT = `${SHOPIFY_STOREFRONT_URL}/api/2023-03/graphql.json`

    // Response
    return {
      first,
      GQL_ENDPOINT,
    } as z.infer<typeof GetShopifyProductsTestResponse>
  } catch (error) {
    console.log('getShopifyProducts() error', error)
    throw error
  }
}, resolverConfig)
