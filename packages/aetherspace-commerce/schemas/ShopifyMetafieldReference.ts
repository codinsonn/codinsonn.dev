import { z } from 'aetherspace/schemas'
import { ShopifyProduct } from './ShopifyProduct'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = `Returns the resource which is being referred to by a metafield.`

/** --- ShopifyMetafieldReference ---------------------------------------------------------- */
// TODO: This is a placeholder. It should be replaced with the actual union type.
/** -i- https://shopify.dev/docs/api/storefront/2023-04/unions/MetafieldReference */
export const ShopifyMetafieldReference = z.union([ShopifyProduct, ShopifyProduct]).describe(d)

/** -i- https://shopify.dev/docs/api/storefront/2023-04/unions/MetafieldReference */
export type TShopifyMetafieldReference = z.infer<typeof ShopifyMetafieldReference>
