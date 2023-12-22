import { z } from 'aetherspace/schemas'
import { BaseResumeListItem } from './BaseResumeListItem'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ResumeEducationData: `Data for the educations listed on this resume.`,
  from: `the start date for this education`,
  to: `the end date for this education`,
  title: `the degree or certification for this education`,
  institute: `the school or institute for this education`,
  location: `the location for this education`,
}

/** --- ResumeEducationData -------------------------------------------------------------------- */
/** -i- Data for the educations listed on this resume. */
export const ResumeEducationData = BaseResumeListItem.extendSchema('ResumeEducationData', {
  from: z.string().describe(d.from),
  to: z.string().describe(d.to),
  institute: z.string().describe(d.institute),
  location: z.string().optional().describe(d.location),
}).describe(d.ResumeEducationData)

/** -i- Data for the educations listed on this resume. */
export type ResumeEducationData = z.infer<typeof ResumeEducationData>
