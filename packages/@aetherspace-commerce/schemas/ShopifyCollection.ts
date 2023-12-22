import { z, aetherSchema } from 'aetherspace/schemas'
import { ShopifyImage } from './ShopifyImage'
import { ShopifyMetafield } from './ShopifyMetafield'
import { ShopifySEO } from './ShopifySEO'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  id: `A globally-unique ID.`,
  title: `The collection's name. Limit of 255 characters.`,
  description: `Stripped description of the collection, single line with HTML tags removed.`,
  descriptionHtml: `The description of the collection, complete with HTML formatting.`,
  handle: `A human-friendly unique string for the collection automatically generated from its title. Limit of 255 characters.`,
  image: `Image associated with the collection.`,
  metafield: `Returns a metafield found by namespace and key.`,
  metafields: `The metafields associated with the collection matching the supplied list of namespaces and keys.`,
  onlineStoreUrl: `The URL used for viewing the collection on the shop's Online Store. Returns null if the collection is currently not published to the Online Store sales channel.`,
  seo: `The collection's SEO information.`,
  updatedAt: `The date and time when the product was last modified. A product's updatedAt value can change for different reasons. For example, if an order is placed for a product that has inventory tracking set up, then the inventory adjustment is counted as an update.`,
  ShopifyCollection: `A collection represents a grouping of products that a shop owner can create to organize them or make their shops easier to browse. More info: https://shopify.dev/docs/api/storefront/2023-04/objects/Collection`,
}

/** --- ShopifyCollection ---------------------------------------------------------------------- */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/Collection */
export const ShopifyCollection = aetherSchema('ShopifyCollection', {
  id: z.string().id().describe(d.id),
  title: z.string().describe(d.title),
  description: z.string().describe(d.description),
  descriptionHtml: z.string().describe(d.descriptionHtml),
  handle: z.string().describe(d.handle),
  image: ShopifyImage.nullish().describe(d.image),
  onlineStoreUrl: z.string().url().nullish().describe(d.onlineStoreUrl),
  seo: ShopifySEO.describe(d.seo),
  updatedAt: z.date().describe(d.updatedAt),
  /** -i- should use with (namespace: String!, key: String!) arguments */
  metafield: ShopifyMetafield.nullish().describe(d.metafield),
  /** -i- should use with (identifiers: [ShopifyHasMetafieldsIdentifier!]!) argument */
  metafields: ShopifyMetafield.array().nullish().describe(d.metafields),
}).describe(d.ShopifyCollection)

/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/Collection */
export type ShopifyCollection = z.infer<typeof ShopifyCollection>
