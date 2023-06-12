import { z, aetherSchema } from 'aetherspace/schemas'
import { ShopifyCropRegion, ShopifyImageContentType } from './shopify.enums'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  maxHeight: `Image height in pixels between 1 and 5760.`,
  maxWidth: `Image width in pixels between 1 and 5760.`,
  scale: `Image size multiplier for high-resolution retina displays. Must be within 1..3.`,
  preferredContentType: `Convert the source image into the preferred content type. Supported conversions: .svg to .png, any file type to .jpg, and any file type to .webp`,
  crop: `The region of the image to remain after cropping. Must be used in conjunction with the maxWidth and/or maxHeight fields, where the maxWidth and maxHeight aren't equal. The crop argument should coincide with the smaller value. A smaller maxWidth indicates a LEFT or RIGHT crop, while a smaller maxHeight indicates a TOP or BOTTOM crop. For example, { maxWidth: 5, maxHeight: 10, crop: LEFT } will result in an image with a width of 5 and height of 10, where the right side of the image is removed.`,
}

/** --- ShopifyImageTransformInput ------------------------------------------------------------- */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/input-objects/ImageTransformInput */
export const ShopifyImageTransformInput = aetherSchema('ShopifyImageTransformInput', {
  maxHeight: z.number().int().nullish().describe(d.maxHeight),
  maxWidth: z.number().int().nullish().describe(d.maxWidth),
  scale: z.number().int().nullish().describe(d.scale),
  preferredContentType: ShopifyImageContentType.nullish().describe(d.preferredContentType),
  crop: ShopifyCropRegion.nullish().describe(d.crop),
})

/** -i- https://shopify.dev/docs/api/storefront/2023-04/input-objects/ImageTransformInput */
export type TShopifyImageTransformInput = z.infer<typeof ShopifyImageTransformInput>
