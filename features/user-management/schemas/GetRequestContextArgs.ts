import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  echo: `Echoes back the input`,
}

/* --- GetRequestContextArgs ------------------------------------------------------------------ */

export const GetRequestContextArgs = aetherSchema('GetRequestContextArgs', {
  echo: z.string().nullish().describe(d.echo),
})

export type GetRequestContextArgs = z.infer<typeof GetRequestContextArgs>
