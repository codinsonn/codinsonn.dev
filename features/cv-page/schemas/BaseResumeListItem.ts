import { z } from 'aetherspace/schemas'
import { BaseLinkData } from 'links-page/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  BaseResumeListItem: `Shared set of datastructure for all kinds of projects you'd like to share on your resume`,
  title: `the title of this project`,
  year: `the year this project was completed`,
  collaborators: `the collaborators for this project`,
  description: `the description of this project`,
}

/** --- BaseResumeListItem --------------------------------------------------------------------- */
/** -i- Shared set of datastructure for all kinds of projects you&#x27;d like to share on your resume */
export const BaseResumeListItem = BaseLinkData.extendSchema('BaseResumeListItem', {
  title: z.string().describe(d.title),
  year: z.string().optional().describe(d.year),
  collaborators: z.string().optional().describe(d.collaborators),
  description: z.string().optional().describe(d.description),
}).describe(d.BaseResumeListItem)

/** -i- Shared set of datastructure for all kinds of projects you&#x27;d like to share on your resume */
export type TBaseResumeListItem = z.infer<typeof BaseResumeListItem>
