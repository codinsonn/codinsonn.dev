import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  debug: `Returns extra debug info`,
}

/* --- GetRequestContextArgs ------------------------------------------------------------------ */

export const GetRequestContextArgs = aetherSchema('GetRequestContextArgs', {
  debug: z.string().nullish().describe(d.debug),
})

export type GetRequestContextArgs = z.infer<typeof GetRequestContextArgs>
