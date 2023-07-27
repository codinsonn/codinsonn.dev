import { z, aetherSchema } from 'aetherspace/schemas'
// Schemas
import { ResumeCardData } from './ResumeCardData'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ResumeData: `Single Source of Truth for the cv-page screen data`,
  id: `the unique identifier for this ResumeData`,
  slug: `the unique slug for this ResumeData`,
}

/** --- ResumeData ----------------------------------------------------------------------------- */
/** -i- Single Source of Truth for the cv-page screen data */
export const ResumeData = aetherSchema('ResumeData', {
  id: z.string().id().describe(d.id),
  slug: z.string().describe(d.slug),
  generalData: ResumeCardData,
}).describe(d.ResumeData)

/** -i- Single Source of Truth for the cv-page screen data */
export type TResumeData = z.infer<typeof ResumeData>
