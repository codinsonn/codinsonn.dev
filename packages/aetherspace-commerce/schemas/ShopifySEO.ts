import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  description: `The meta description`,
  title: `The SEO title`,
}

/** --- ShopifySEO ---------------------------------------------------------------------------- */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/SEO */
export const ShopifySEO = aetherSchema('ShopifySEO', {
  description: z.string().optional().describe(d.description),
  title: z.string().optional().describe(d.title),
})

/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/SEO */
export type TShopifySEO = z.infer<typeof ShopifySEO>
