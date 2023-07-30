import { z } from 'aetherspace/schemas'
import { BaseLinkData } from 'links-page/schemas'

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
export const ResumeEducationData = BaseLinkData.extendSchema('ResumeEducationData', {
  from: z.string().describe(d.from),
  to: z.string().describe(d.to),
  title: z.string().optional().describe(d.title),
  institute: z.string().describe(d.institute),
  location: z.string().optional().describe(d.location),
}).describe(d.ResumeEducationData)

/** -i- Data for the educations listed on this resume. */
export type TResumeEducationData = z.infer<typeof ResumeEducationData>
