import { z, aetherSchema, createDataBridge } from 'aetherspace/schemas'
import { ShopifyProduct } from './ShopifyProduct'

/** --- GetShopifyProductsArgs ----------------------------------------------------------------- */
/** -i- The arguments to the getShopifyProduct() resolver */
export const GetShopifyProductsArgs = aetherSchema('GetShopifyProductsArgs', {
  first: z.number().int().default(20),
})

/** -i- The arguments to the getShopifyProduct() resolver */
export type GetShopifyProductsArgs = z.infer<typeof GetShopifyProductsArgs>

/** --- GetShopifyProductsResponse ------------------------------------------------------------- */
/** -i- The response from the getShopifyProduct() resolver */
export const GetShopifyProductsResponse = aetherSchema('GetShopifyProductsResponse', {
  first: z.number().int().nullish(),
  shopifyProducts: ShopifyProduct.array(),
})

/** -i- The response from the getShopifyProduct() resolver */
export type GetShopifyProductsResponse = z.infer<typeof GetShopifyProductsResponse>

/** --- GetShopifyProductsDataBridge ----------------------------------------------------------- */
/** -i- The API config for the getShopifyProduct() resolver */
export const GetShopifyProductsDataBridge = createDataBridge({
  resolverName: 'getShopifyProducts',
  resolverType: 'query',
  argsSchema: GetShopifyProductsArgs,
  responseSchema: GetShopifyProductsResponse,
  apiPath: '/api/aetherspace/commerce/shopify/products',
  allowedMethods: ['GRAPHQL', 'GET', 'POST'],
})
