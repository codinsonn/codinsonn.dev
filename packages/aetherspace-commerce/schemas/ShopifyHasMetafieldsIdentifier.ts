import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  key: `The identifier for the metafield.`,
  namespace: `The namespace for the metafield.`,
}

/** --- ShopifyHasMetafieldsIdentifier --------------------------------------------------------- */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/input-objects/HasMetafieldsIdentifier */
export const ShopifyHasMetafieldsIdentifier = aetherSchema('ShopifyHasMetafieldsIdentifier', {
  key: z.string().describe(d.key),
  namespace: z.string().describe(d.namespace),
})

/** -i- https://shopify.dev/docs/api/storefront/2023-04/input-objects/HasMetafieldsIdentifier */
export type TShopifyHasMetafieldsIdentifier = z.infer<typeof ShopifyHasMetafieldsIdentifier>
