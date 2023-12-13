import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  name: `The name of the option.`,
  value: `The value of the product option.`,
}

/** --- ShopifySelectedOption ------------------------------------------------------------------ */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/SelectedOption */
export const ShopifySelectedOption = aetherSchema('ShopifySelectedOption', {
  name: z.string().describe(d.name),
  value: z.string().describe(d.value),
})

/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/SelectedOption */
export type TShopifySelectedOption = z.infer<typeof ShopifySelectedOption>
