import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ResumeCardData: `General data for the top card of the resume page`,
}

/** --- ResumeCardData ------------------------------------------------------------------------- */
/** -i- General data for the top card of the resume page */
export const ResumeCardData = aetherSchema('ResumeCardData', {
  profileImgUrl: z.string().optional(),
  displayName: z.string(),
  functionTitle: z.string(),
  location: z.string(),
  pronouns: z.string(),
  website: z.string().url().optional(),
  about: z.string().optional(),
}).describe(d.ResumeCardData)

/** -i- General data for the top card of the resume page */
export type TResumeCardData = z.infer<typeof ResumeCardData>
