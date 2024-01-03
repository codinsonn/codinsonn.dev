import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ClerkMiddlewareEvt: `The 'evt' object provider by clerk's authMiddleware >> afterAuth()`,
  sourcePage: `The source of the current auth context (e.g. /middleware)`,
}

/** --- ClerkMiddlewareEvt --------------------------------------------------------------------- */
/** -i- The 'evt' object provider by clerk's authMiddleware >> afterAuth() */
export const ClerkMiddlewareEvt = aetherSchema('ClerkMiddlewareEvt', {
  sourcePage: z.string().nullish().describe(d.sourcePage),
}).describe(d.ClerkMiddlewareEvt)

/** -i- The 'evt' object provider by clerk's authMiddleware >> afterAuth() */
export type ClerkMiddlewareEvt = z.infer<typeof ClerkMiddlewareEvt>
