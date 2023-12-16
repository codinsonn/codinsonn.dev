import { z, aetherSchema } from 'aetherspace/schemas'
// import { ShopifyMetafieldParentResource } from './ShopifyMetafieldParentResource'
// import { ShopifyMetafieldReference } from './ShopifyMetafieldReference'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  createdAt: `The date and time when the storefront metafield was created.`,
  description: `The description of a metafield.`,
  id: `Globally unique identifier.`,
  key: `The unique identifier for the metafield within its namespace.`,
  namespace: `The container for a group of metafields that the metafield is associated with.`,
  parentResource: `The parent object that the metafield belongs to.`,
  reference: `Returns a reference object if the metafield's type is a resource reference.`,
  type: `The type name of the metafield. Refer to the list of supported types: https://shopify.dev/apps/metafields/definitions/types`,
  updatedAt: `The date and time when the metafield was last updated.`,
  value: `The data stored in the metafield. Always stored as a string, regardless of the metafield's type.`,
}

/** --- ShopifyMetafield ----------------------------------------------------------------------- */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/Metafield */
export const ShopifyMetafield = aetherSchema('ShopifyMetafield', {
  createdAt: z.date().describe(d.createdAt),
  description: z.string().nullish().describe(d.description),
  id: z.string().id().describe(d.id),
  key: z.string().describe(d.key),
  namespace: z.string().describe(d.namespace),
  type: z.string().describe(d.type),
  updatedAt: z.date().describe(d.updatedAt),
  value: z.string().describe(d.value),
  /** -i- Infinite loop: ShopifyMetafieldParentResource */
  /** -i- https://shopify.dev/docs/api/storefront/2023-04/unions/MetafieldParentResource */
  parentResource: z.unknown().nullish().describe(d.parentResource),
  /** -i- Infinite loop: ShopifyMetafieldReference */
  /** -i- https://shopify.dev/docs/api/storefront/2023-04/unions/MetafieldReference */
  reference: z.unknown().nullish().describe(d.reference),
})

/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/Metafield */
export type ShopifyMetafield = z.infer<typeof ShopifyMetafield>
