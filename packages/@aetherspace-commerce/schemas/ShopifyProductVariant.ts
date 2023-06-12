import { z, aetherSchema } from 'aetherspace/schemas'
import { ShopifyMoneyV2 } from './ShopifyMoneyV2'
import { ShopifyImage } from './ShopifyImage'
import { ShopifyMetafield } from './ShopifyMetafield'
import { ShopifySelectedOption } from './ShopifySelectedOption'
import { ShopifyUnitPriceMeasurement } from './ShopifyUnitPriceMeasurement'
import { ShopifyWeightUnit } from './shopify.enums'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  availableForSale: `Whether the product variant is available for sale.`,
  barcode: `The barcode (for example, ISBN, UPC, or GTIN) associated with the variant.`,
  compareAtPrice: `The compare at price of the variant. This can be used to mark a variant as on sale, when compareAtPrice is higher than price.`,
  currentlyNotInStock: `Whether a product is out of stock but still available for purchase (used for backorders).`,
  id: `A globally-unique ID.`,
  image: `Image associated with the product variant. This field falls back to the product image if no image is available.`,
  metafield: `Returns a metafield found by namespace and key.`,
  metafields: `The metafields associated with the resource matching the supplied list of namespaces and keys.`,
  price: `The product variant’s price.`,
  product: `The product object that the product variant belongs to.`,
  quantityAvailable: `The total sellable quantity of the variant for online sales channels.`,
  requiresShipping: `Whether a customer needs to provide a shipping address when placing an order for the product variant.`,
  selectedOptions: `List of product options applied to the variant.`,
  sku: `The SKU (stock keeping unit) associated with the variant.`,
  title: `The product variant’s title.`,
  unitPrice: `The unit price value for the variant based on the variant's measurement.`,
  unitPriceMeasurement: `The unit price measurement for the variant.`,
  weight: `The weight of the product variant in the unit system specified with weight_unit.`,
  weightUnit: `Unit of measurement for weight.`,
}

/** --- ShopifyProductVariant ------------------------------------------------------------------ */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/ProductVariant */
export const ShopifyProductVariant = aetherSchema('ShopifyProductVariant', {
  id: z.string().id().describe(d.id),
  title: z.string().describe(d.title),
  availableForSale: z.boolean().describe(d.availableForSale),
  barcode: z.string().nullish().describe(d.barcode),
  compareAtPrice: ShopifyMoneyV2.nullish().describe(d.compareAtPrice),
  currentlyNotInStock: z.boolean().describe(d.currentlyNotInStock),
  image: ShopifyImage.nullish().describe(d.image),
  price: ShopifyMoneyV2.describe(d.price),
  quantityAvailable: z.number().int().describe(d.quantityAvailable),
  requiresShipping: z.boolean().describe(d.requiresShipping),
  selectedOptions: ShopifySelectedOption.describe(d.selectedOptions),
  sku: z.string().nullish().describe(d.sku),
  unitPrice: ShopifyMoneyV2.nullish().describe(d.unitPrice),
  unitPriceMeasurement: ShopifyUnitPriceMeasurement.nullish().describe(d.unitPriceMeasurement),
  weight: z.number().nullish().describe(d.weight),
  weightUnit: ShopifyWeightUnit.describe(d.weightUnit),
  /** -i- should use with (namespace: String!, key: String!) arguments */
  metafield: ShopifyMetafield.nullish().describe(d.metafield),
  /** -i- should use with (identifiers: [ShopifyHasMetafieldsIdentifier!]!) argument */
  metafields: ShopifyMetafield.array().nullish().describe(d.metafields),
  /** -i- Infinite loop: ShopifyProduct */
  /** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/Product */
  product: z.unknown().nullish().describe(d.product),
})

/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/ProductVariant */
export type TShopifyProductVariant = z.infer<typeof ShopifyProductVariant>
