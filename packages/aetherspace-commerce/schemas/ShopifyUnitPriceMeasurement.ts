import { z, aetherSchema } from 'aetherspace/schemas'
import { ShopifyProductMeasurementType, ShopifyProductMeasurementUnit } from './shopify.enums'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  measuredType: `The type of unit of measurement for the unit price measurement.`,
  quantityUnit: `The quantity unit for the unit price measurement.`,
  quantityValue: `The quantity value for the unit price measurement.`,
  referenceUnit: `The reference unit for the unit price measurement.`,
  referenceValue: `The reference value for the unit price measurement.`,
}

/** --- ShopifyUnitPriceMeasurement ------------------------------------------------------------ */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/UnitPriceMeasurement */
export const ShopifyUnitPriceMeasurement = aetherSchema('ShopifyUnitPriceMeasurement', {
  measuredType: ShopifyProductMeasurementType.nullish().describe(d.measuredType),
  quantityUnit: ShopifyProductMeasurementUnit.nullish().describe(d.quantityUnit),
  quantityValue: z.number().describe(d.quantityValue),
  referenceUnit: ShopifyProductMeasurementUnit.nullish().describe(d.referenceUnit),
  referenceValue: z.number().int().describe(d.referenceValue),
})

/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/UnitPriceMeasurement */
export type TShopifyUnitPriceMeasurement = z.infer<typeof ShopifyUnitPriceMeasurement>
