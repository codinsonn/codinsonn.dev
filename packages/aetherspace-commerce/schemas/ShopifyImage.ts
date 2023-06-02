import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  id: `A unique ID for the image.`,
  height: `The original height of the image in pixels. Returns null if the image is not hosted by Shopify.`,
  width: `The original width of the image in pixels. Returns null if the image is not hosted by Shopify.`,
  altText: `A word or phrase to share the nature or contents of an image.`,
  url: `The location of the image as a URL.\n\nIf no transform options are specified, then the original image will be preserved including any pre-applied transforms.\n\nAll transformation options are considered "best-effort". Any transformation that the original image type doesn't support will be ignored.\n\nIf you need multiple variations of the same image, then you can use GraphQL aliases.`,
}

/** --- ShopifyImage --------------------------------------------------------------------------- */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/Image */
export const ShopifyImage = aetherSchema('ShopifyImage', {
  id: z.string().id().nullish().describe(d.id),
  height: z.number().int().nullish().describe(d.height),
  width: z.number().int().nullish().describe(d.width),
  altText: z.string().nullish().describe(d.altText),
  /** -i- can use with optional (transform: ShopifyImageTransformInput) to provide variations of the same image */
  url: z.string().describe(d.url),
})

/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/Image */
export type TShopifyImage = z.infer<typeof ShopifyImage>
