// Schemas
import { z } from 'aetherspace/schemas'
import { BaseResumeListItem } from './BaseResumeListItem'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ResumeSpeakingData: `Data for a project to be listed on the resume`,
  event: `the event for this talk`,
  location: `the location for this talk`,
}

/** --- ResumeSpeakingData ---------------------------------------------------------------------- */
/** -i- Data for a project to be listed on the resume */
export const ResumeSpeakingData = BaseResumeListItem.extendSchema('ResumeSpeakingData', {
  event: z.string().optional().describe(d.event),
  location: z.string().optional().describe(d.location),
}).describe(d.ResumeSpeakingData)

/** -i- Data for a project to be listed on the resume */
export type TResumeSpeakingData = z.infer<typeof ResumeSpeakingData>
