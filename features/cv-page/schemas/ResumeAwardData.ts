// Schemas
import { z } from 'aetherspace/schemas'
import { BaseResumeListItem } from './BaseResumeListItem'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ResumeAwardData: `Data for an award to be listed on the resume`,
  presentedBy: `the organisation that presented you with this award`,
}

/** --- ResumeAwardData ---------------------------------------------------------------------- */
/** -i- Data for a project to be listed on the resume */
export const ResumeAwardData = BaseResumeListItem.extendSchema('ResumeAwardData', {
  presentedBy: z.string().nullish().describe(d.presentedBy),
}).describe(d.ResumeAwardData)

/** -i- Data for a project to be listed on the resume */
export type TResumeAwardData = z.infer<typeof ResumeAwardData>
