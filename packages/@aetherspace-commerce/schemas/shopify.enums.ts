import { z } from 'aetherspace/schemas'

/** --- ShopifyImageContentType ---------------------------------------------------------------- */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/ImageContentType */
export const ShopifyImageContentType = z.enum(['JPG', 'PNG', 'WEBP'])

/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/ImageContentType */
export const SHOPIFY_IMAGE_CONTENT_TYPE = ShopifyImageContentType.enum
/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/ImageContentType */
export type ShopifyImageContentType = z.infer<typeof ShopifyImageContentType>
/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/ImageContentType */
export type SHOPIFY_IMAGE_CONTENT_TYPE = ShopifyImageContentType

/* --- ShopifyCropRegion ----------------------------------------------------------------------- */
/* -i- https://shopify.dev/docs/api/storefront/2023-04/enums/CropRegion */
export const ShopifyCropRegion = z.enum(['BOTTOM', 'CENTER', 'LEFT', 'RIGHT', 'TOP'])

/* -i- https://shopify.dev/docs/api/storefront/2023-04/enums/CropRegion */
export const SHOPIFY_CROP_REGION = ShopifyCropRegion.enum
/* -i- https://shopify.dev/docs/api/storefront/2023-04/enums/CropRegion */
export type ShopifyCropRegion = z.infer<typeof ShopifyCropRegion>
/* -i- https://shopify.dev/docs/api/storefront/2023-04/enums/CropRegion */
export type SHOPIFY_CROP_REGION = ShopifyCropRegion

/** --- ShopifyCurrencyCode -------------------------------------------------------------------- */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/CurrencyCode */
export const ShopifyCurrencyCode = z.enum([
    'AED', 'AFN', 'ALL', 'AMD', 'ANG', 'AOA', 'ARS', 'AUD', 'AWG', 'AZN', 'BAM', 'BBD',
    'BDT', 'BGN', 'BHD', 'BIF', 'BMD', 'BND', 'BOB', 'BRL', 'BSD', 'BTN', 'BWP', 'BYN',
    'BZD', 'CAD', 'CDF', 'CHF', 'CLP', 'CNY', 'COP', 'CRC', 'CVE', 'CZK', 'DJF', 'DKK',
    'DOP', 'DZD', 'EGP', 'ERN', 'ETB', 'EUR', 'FJD', 'FKP', 'GBP', 'GEL', 'GHS', 'GIP',
    'GMD', 'GNF', 'GTQ', 'GYD', 'HKD', 'HNL', 'HRK', 'HTG', 'HUF', 'IDR', 'ILS', 'INR',
    'IQD', 'IRR', 'ISK', 'JEP', 'JMD', 'JOD', 'JPY', 'KES', 'KGS', 'KHR', 'KID', 'KMF',
    'KRW', 'KWD', 'KYD', 'KZT', 'LAK', 'LBP', 'LKR', 'LRD', 'LSL', 'LTL', 'LVL', 'LYD',
    'MAD', 'MDL', 'MGA', 'MKD', 'MMK', 'MNT', 'MOP', 'MRU', 'MUR', 'MVR', 'MWK', 'MXN',
    'MYR', 'MZN', 'NAD', 'NGN', 'NIO', 'NOK', 'NPR', 'NZD', 'OMR', 'PAB', 'PEN', 'PGK',
    'PHP', 'PKR', 'PLN', 'PYG', 'QAR', 'RON', 'RSD', 'RUB', 'RWF', 'SAR', 'SBD', 'SCR',
    'SDG', 'SEK', 'SGD', 'SHP', 'SLL', 'SOS', 'SRD', 'SSP', 'STN', 'SYP', 'SZL', 'THB',
    'TJS', 'TMT', 'TND', 'TOP', 'TRY', 'TTD', 'TWD', 'TZS', 'UAH', 'UGX', 'USD', 'UYU',
    'UZS', 'VED', 'VES', 'VND', 'VUV', 'WST', 'XAF', 'XCD', 'XOF',
]) // prettier-ignore

/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/CurrencyCode */
export const SHOPIFY_CURRENCY_CODE = ShopifyCurrencyCode.enum
/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/CurrencyCode */
export type ShopifyCurrencyCode = z.infer<typeof ShopifyCurrencyCode>
/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/CurrencyCode */
export type SHOPIFY_CURRENCY_CODE = ShopifyCurrencyCode

/** --- ShopifyProductMeasurementType ------------------------------------------------ */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/UnitPriceMeasurementMeasuredType */
export const ShopifyProductMeasurementType = z.enum([
    'AREA', // Unit of measurements representing areas.
    'LENGTH', // Unit of measurements representing lengths.
    'VOLUME', // Unit of measurements representing volumes.
    'WEIGHT', // Unit of measurements representing weights.
]) // prettier-ignore

/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/UnitPriceMeasurementMeasuredType */
export const SHOPIFY_PRODUCT_MEASUREMENT_TYPE = ShopifyProductMeasurementType.enum
/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/UnitPriceMeasurementMeasuredType */
export type ShopifyProductMeasurementType = z.infer<typeof ShopifyProductMeasurementType>
/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/UnitPriceMeasurementMeasuredType */
export type SHOPIFY_PRODUCT_MEASUREMENT_TYPE = ShopifyProductMeasurementType

/** --- ShopifyProductMeasurementUnit ------------------------------------------------ */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/UnitPriceMeasurementMeasuredUnit */
export const ShopifyProductMeasurementUnit = z.enum([
    'CL', 'CM', 'G', 'KG', 'L', 'M', 'M2', 'M3', 'ML', 'MM',
]) // prettier-ignore

/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/UnitPriceMeasurementMeasuredUnit */
export const SHOPIFY_PRODUCT_MEASUREMENT_UNIT = ShopifyProductMeasurementUnit.enum
/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/UnitPriceMeasurementMeasuredUnit */
export type ShopifyProductMeasurementUnit = z.infer<typeof ShopifyProductMeasurementUnit>
/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/UnitPriceMeasurementMeasuredUnit */
export type SHOPIFY_PRODUCT_MEASUREMENT_UNIT = ShopifyProductMeasurementUnit

/** --- ShopifyWeightUnit ---------------------------------------------------------------------- */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/WeightUnit */
export const ShopifyWeightUnit = z.enum(['GRAMS', 'KILOGRAMS', 'OUNCES', 'POUNDS'])

/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/WeightUnit */
export const SHOPIFY_WEIGHT_UNIT = ShopifyWeightUnit.enum
/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/WeightUnit */
export type ShopifyWeightUnit = z.infer<typeof ShopifyWeightUnit>
/** -i- https://shopify.dev/docs/api/storefront/2023-04/enums/WeightUnit */
export type SHOPIFY_WEIGHT_UNIT = ShopifyWeightUnit
