// Schemas
import { z } from 'aetherspace/schemas'
import { BaseResumeListItem } from './BaseResumeListItem'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ResumeWritingData: `Data for a project to be listed on the resume`,
  publisher: `the publisher for this article`,
}

/** --- ResumeWritingData ---------------------------------------------------------------------- */
/** -i- Data for a project to be listed on the resume */
export const ResumeWritingData = BaseResumeListItem.extendSchema('ResumeWritingData', {
  publisher: z.string().optional().describe(d.publisher),
}).describe(d.ResumeWritingData)

/** -i- Data for a project to be listed on the resume */
export type TResumeWritingData = z.infer<typeof ResumeWritingData>
