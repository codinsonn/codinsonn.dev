import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ResumeContactInfo: `Contact info for the resume page`,
}

/** --- ResumeContactInfo ---------------------------------------------------------------------- */
/** -i- Contact info for the resume page */
export const ResumeContactInfo = aetherSchema('ResumeContactInfo', {
  email: z.string().email().optional(),
  phone: z.string().optional(),
  // socialLinks:
}).describe(d.ResumeContactInfo)

/** -i- Contact info for the resume page */
export type TResumeContactInfo = z.infer<typeof ResumeContactInfo>
