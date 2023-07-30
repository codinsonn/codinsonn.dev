// Schemas
import { z } from 'aetherspace/schemas'
import { BaseResumeListItem } from './BaseResumeListItem'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ResumeProjectData: `Data for a project to be listed on the resume`,
  client: `the client for this project`,
}

/** --- ResumeProjectData ---------------------------------------------------------------------- */
/** -i- Data for a project to be listed on the resume */
export const ResumeProjectData = BaseResumeListItem.extendSchema('ResumeProjectData', {
  client: z.string().optional().describe(d.client),
}).describe(d.ResumeProjectData)

/** -i- Data for a project to be listed on the resume */
export type TResumeProjectData = z.infer<typeof ResumeProjectData>
