import { z, aetherSchema } from 'aetherspace/schemas'
import { ShopifyMoneyV2 } from './ShopifyMoneyV2'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  minVariantPrice: `The lowest variant's price.`,
  maxVariantPrice: `The highest variant's price.`,
}

/** --- ShopifyProductPriceRange --------------------------------------------------------------- */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/ProductPriceRange */
export const ShopifyProductPriceRange = aetherSchema('ShopifyProductPriceRange', {
  minVariantPrice: ShopifyMoneyV2.describe(d.minVariantPrice),
  maxVariantPrice: ShopifyMoneyV2.describe(d.maxVariantPrice),
})

/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/ProductPriceRange */
export type ShopifyProductPriceRange = z.infer<typeof ShopifyProductPriceRange>
