import { z, aetherSchema } from 'aetherspace/schemas'
import { ShopifyProductPriceRange } from './ShopifyProductPriceRange'
import { ShopifyImage } from './ShopifyImage'
import { ShopifyMetafield } from './ShopifyMetafield'
import { ShopifyProductOption } from './ShopifyProductOption'
import { ShopifySEO } from './ShopifySEO'
import { ShopifyProductVariant } from './ShopifyProductVariant'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  id: `A globally-unique ID`,
  title: `The product’s title.`,
  descriptionHtml: `The description of the product, complete with HTML formatting.`,
  availableForSale: `Indicates if at least one product variant is available for sale.`,
  compareAtPriceRange: `The compare at price of the product across all variants.`,
  createdAt: `The date and time when the product was created.`,
  description: `Stripped description of the product, single line with HTML tags removed.`,
  featuredImage: `The featured image for the product.\n\nThis field is functionally equivalent to images(first: 1)`,
  handle: `A human-friendly unique string for the Product automatically generated from its title. They are used by the Liquid templating language to refer to objects.`,
  isGiftCard: `Whether the product is a gift card.`,
  metafield: `Returns a metafield found by namespace and key.`,
  metafields: `The metafields associated with the resource matching the supplied list of namespaces and keys.`,
  onlineStoreUrl: `The URL used for viewing the resource on the shop's Online Store. Returns null if the resource is currently not published to the Online Store sales channel.`,
  options: `List of product options like size, color, etc.`,
  priceRange: `The price range`,
  productType: `A categorization that a product can be tagged with, commonly used for filtering and searching.`,
  publishedAt: `The date and time when the product was published to the channel.`,
  requiresSellingPlan: `Whether the product can only be purchased with a selling plan.`,
  seo: `The product's SEO information.`,
  tags: `A comma separated list of tags that have been added to the product. Additional access scope required for private apps: unauthenticated_read_product_tags.`,
  totalInventory: `The total quantity of inventory in stock for this Product.`,
  updatedAt: `The date and time when the product was last modified. A product's updatedAt value can change for different reasons. For example, if an order is placed for a product that has inventory tracking set up, then the inventory adjustment is counted as an update.`,
  variantBySelectedOptions: `Find a product’s variant based on its selected options. This is useful for converting a user’s selection of product options into a single matching variant. If there is not a variant for the selected options, null will be returned.`,
  vendor: `The product’s vendor name.`,
  variants: `List of the product’s variants.`,
}

/** --- ShopifyProduct ------------------------------------------------------------------------- */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/Product */
export const ShopifyProduct = aetherSchema('ShopifyProduct', {
  id: z.string().id().describe(d.id),
  title: z.string().describe(d.title),
  descriptionHtml: z.string().describe(d.descriptionHtml),
  availableForSale: z.boolean().describe(d.availableForSale),
  compareAtPriceRange: ShopifyProductPriceRange.describe(d.compareAtPriceRange),
  createdAt: z.date().coerce().describe(d.createdAt),
  handle: z.string().describe(d.handle),
  isGiftCard: z.boolean().describe(d.isGiftCard),
  onlineStoreUrl: z.string().url().nullish().describe(d.onlineStoreUrl),
  priceRange: ShopifyProductPriceRange.describe(d.priceRange),
  productType: z.string().describe(d.productType),
  publishedAt: z.date().coerce().describe(d.publishedAt),
  requiresSellingPlan: z.boolean().describe(d.requiresSellingPlan),
  seo: ShopifySEO.describe(d.seo),
  tags: z.string().array().describe(d.tags),
  totalInventory: z.number().int().describe(d.totalInventory),
  updatedAt: z.date().coerce().describe(d.updatedAt),
  vendor: z.string().describe(d.vendor),
  variants: ShopifyProductVariant.array().describe(d.variants),
  /** -i- should use with optional (truncateAt: Int) argument to limit length in GraphQL query */
  description: z.string().describe(d.description),
  /** -i- functionally equivalent to images(first: 1) in GraphQL query */
  featuredImage: ShopifyImage.nullish().describe(d.featuredImage),
  /** -i- should use with (namespace: String!, key: String!) arguments */
  metafield: ShopifyMetafield.nullish().describe(d.metafield),
  /** -i- should use with (identifiers: [ShopifyHasMetafieldsIdentifier!]!) argument */
  metafields: ShopifyMetafield.array().nullish().describe(d.metafields),
  /** -i- could use with optional (first: Int!) argument to truncate array length */
  options: ShopifyProductOption.array().describe(d.options),
  /** -i- should use with (selectedOptions: [ShopifySelectedOptionInput!]!) argument */
  variantBySelectedOptions: ShopifyProductVariant.nullish().describe(d.variantBySelectedOptions),
})

/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/Product */
export type TShopifyProduct = z.infer<typeof ShopifyProduct>
