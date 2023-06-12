import { z } from 'aetherspace/schemas'
import { ShopifyProduct } from './ShopifyProduct'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = `A resource that the metafield belongs to.`

/** --- ShopifyMetafieldParentResource ---------------------------------------------------------- */
// TODO: This is a placeholder. It should be replaced with the actual union type.
/** -i- https://shopify.dev/docs/api/storefront/2023-04/unions/MetafieldParentResource */
export const ShopifyMetafieldParentResource = z.union([ShopifyProduct, ShopifyProduct]).describe(d)

/** -i- https://shopify.dev/docs/api/storefront/2023-04/unions/MetafieldParentResource */
export type TShopifyMetafieldParentResource = z.infer<typeof ShopifyMetafieldParentResource>
