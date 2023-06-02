import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  id: `Globally unique identifier.`,
  name: `The name of the product option.`,
  values: `The corresponding value to the product option name.`,
}

/** --- ShopifyProductOption ------------------------------------------------------------------- */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/ProductOption */
export const ShopifyProductOption = aetherSchema('ShopifyProductOption', {
  id: z.string().id().describe(d.id),
  name: z.string().describe(d.name),
  values: z.array(z.string()).describe(d.values),
})

/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/ProductOption */
export type TShopifyProductOption = z.infer<typeof ShopifyProductOption>
