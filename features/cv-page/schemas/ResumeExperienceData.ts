import { z } from 'aetherspace/schemas'
import { BaseResumeListItem } from './BaseResumeListItem'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ResumeExperienceData: `Experience data for this resume`,
  from: `the start date for this work experience`,
  to: `the end date for this work experience`,
  title: `the title for this work experience`,
  company: `the company for this work experience`,
  location: `the location for this work experience`,
}

/** --- ResumeExperienceData ------------------------------------------------------------------- */
/** -i- Experience data for this resume */
export const ResumeExperienceData = BaseResumeListItem.extendSchema('ResumeExperienceData', {
  from: z.string().describe(d.from),
  to: z.string().describe(d.to),
  title: z.string().nullish().describe(d.title),
  company: z.string().describe(d.company),
  location: z.string().nullish().describe(d.location),
}).describe(d.ResumeExperienceData)

/** -i- Experience data for this resume */
export type ResumeExperienceData = z.infer<typeof ResumeExperienceData>
