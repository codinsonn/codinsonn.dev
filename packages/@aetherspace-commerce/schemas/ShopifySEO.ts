import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  description: `The meta description`,
  title: `The SEO title`,
}

/** --- ShopifySEO ---------------------------------------------------------------------------- */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/SEO */
export const ShopifySEO = aetherSchema('ShopifySEO', {
  description: z.string().nullish().describe(d.description),
  title: z.string().nullish().describe(d.title),
})

/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/SEO */
export type ShopifySEO = z.infer<typeof ShopifySEO>
