import { z, aetherSchema } from 'aetherspace/schemas'
import { ShopifyCurrencyCode } from './shopify.enums'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  amount: `Decimal money amount.`,
  currencyCode: `Currency of the money.`,
}

/** --- ShopifyMoneyV2 ------------------------------------------------------------------------- */
/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/MoneyV2 */
export const ShopifyMoneyV2 = aetherSchema('ShopifyMoneyV2', {
  amount: z.number().coerce().describe(d.amount),
  currencyCode: ShopifyCurrencyCode.describe(d.currencyCode),
})

/** -i- https://shopify.dev/docs/api/storefront/2023-04/objects/MoneyV2 */
export type ShopifyMoneyV2 = z.infer<typeof ShopifyMoneyV2>
