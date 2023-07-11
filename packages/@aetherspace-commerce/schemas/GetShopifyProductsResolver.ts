import { z, aetherSchema } from 'aetherspace/schemas'
// Schemas
import { ShopifyProduct } from './ShopifyProduct'

/** --- GetShopifyProductsArgs ----------------------------------------------------------------- */
/** -i- The arguments to the getShopifyProduct() resolver */
export const GetShopifyProductsArgs = aetherSchema('GetShopifyProductsArgs', {
  first: z.number().int().default(20),
})

/** -i- The arguments to the getShopifyProduct() resolver */
export type TGetShopifyProductsArgs = z.infer<typeof GetShopifyProductsArgs>

/** --- GetShopifyProductsResponse ------------------------------------------------------------- */
/** -i- The response from the getShopifyProduct() resolver */
export const GetShopifyProductsResponse = aetherSchema('GetShopifyProductsResponse', {
  first: z.number().int().nullish(),
  shopifyProducts: ShopifyProduct.array(),
})

/** -i- The response from the getShopifyProduct() resolver */
export type TGetShopifyProductsResponse = z.infer<typeof GetShopifyProductsResponse>

/** --- GetShopifyProductsAPIConfig ------------------------------------------------------------ */
/** -i- The API config for the getShopifyProduct() resolver */
export const GetShopifyProductsAPIConfig = {
  argsSchema: GetShopifyProductsArgs,
  responseSchema: GetShopifyProductsResponse,
  apiPath: '/api/aetherspace/commerce/shopify/products',
  allowedMethods: ['GET', 'POST'],
}
