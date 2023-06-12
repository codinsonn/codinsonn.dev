import { z, aetherSchema } from 'aetherspace/schemas'
import { aetherResolver } from 'aetherspace/utils/serverUtils'
// Schemas
import { ShopifyProduct, TShopifyProduct } from '../schemas/ShopifyProduct'
import { shopifyGraphQLRequest } from '../utils/serverUtils'

/* --- Schemas --------------------------------------------------------------------------------- */

const GetShopifyProductsArgs = aetherSchema('GetShopifyProductsArgs', {
  first: z.number().int().default(250),
})

const GetShopifyProductsResponse = aetherSchema('GetShopifyProductsResponse', {
  first: z.number().int().nullish(),
  shopifyProducts: ShopifyProduct.array(),
})

/* --- Types ----------------------------------------------------------------------------------- */

type TShopifyProductsGraphQLResponse = {
  products: {
    edges: {
      node: TShopifyProduct
    }[]
  }
}

/* --- Config ---------------------------------------------------------------------------------- */

const resolverConfig = {
  argsSchema: GetShopifyProductsArgs,
  responseSchema: GetShopifyProductsResponse,
  // responseSchema: GetShopifyProductsResponse,
}

/** --- getShopifyProducts() ------------------------------------------------------------------- */
/** -i- Resolver to get products from the Shopify GraphQL API */
export const getShopifyProducts = aetherResolver(async ({ args }) => {
  try {
    // Args
    const { first } = args

    // -- Request --

    const graphQLResponse = await shopifyGraphQLRequest<TShopifyProductsGraphQLResponse>({
      variables: { first },
      query: `
        query getShopifyProducts($first: Int!) {
          products(first: $first) {
            edges {
              node {
                id
                title
                handle
                description
                descriptionHtml
                productType
                tags
                vendor
                availableForSale
                createdAt
                updatedAt
                publishedAt
                onlineStoreUrl
                isGiftCard
                totalInventory
                requiresSellingPlan
                seo {
                  description
                  title
                }
                priceRange {
                  maxVariantPrice {
                    amount
                  }
                  minVariantPrice {
                    amount
                  }
                }
                compareAtPriceRange {
                  maxVariantPrice {
                    amount
                    currencyCode
                  }
                  minVariantPrice {
                    amount
                    currencyCode
                  }
                }
                options {
                  id
                  name
                  values
                }
                images(first: 10) {
                  edges {
                    node {
                      id
                      altText
                      url
                      width
                      height
                    }
                  }
                }
                variants(first: 10) {
                  edges {
                    node {
                      id
                      title
                      availableForSale
                      barcode
                      compareAtPrice {
                        amount
                        currencyCode
                      }
                      currentlyNotInStock
                      image {
                        id
                        height
                        altText
                        width
                        url
                      }
                      price {
                        amount
                        currencyCode
                      }
                      quantityAvailable
                      requiresShipping
                      selectedOptions {
                        name
                        value
                      }
                      sku
                      unitPrice {
                        amount
                        currencyCode
                      }
                      unitPriceMeasurement {
                        measuredType
                        quantityUnit
                        quantityValue
                        referenceUnit
                        referenceValue
                      }
                      weight
                      weightUnit
                    }
                  }
                }
              }
            }
          }
        }
      `,
    })

    // -- Transform --

    const shopifyProducts = graphQLResponse.products.edges.map((edge) => {
      const { variants, ...shopifyGQLProduct } = edge.node // @ts-ignore
      return { ...shopifyGQLProduct, variants: variants.edges.map((edge) => edge.node) }
    })

    // -- Respond --

    return {
      first,
      shopifyProducts,
    } as z.infer<typeof GetShopifyProductsResponse>
  } catch (error) {
    console.error('getShopifyProducts() error', error)
    throw error
  }
}, resolverConfig)
