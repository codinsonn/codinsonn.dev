import { z, AetherInput } from 'aetherspace/schemas'
import { SocialLinkData } from './SocialLinkData'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  IconLink: `Single Source of Truth for link-in-bio page's icon links`,
  extraClasses: `Extra classes to add to icon`,
}

/** --- IconLink ------------------------------------------------------------------------------- */
/** -i- Single Source of Truth for link-in-bio page's icon links */
export const IconLink = SocialLinkData.extendSchema('IconLink', {
  extraClasses: z.string().optional().describe(d.extraClasses),
}).describe(d.IconLink)

/** -i- Single Source of Truth for link-in-bio page's icon links */
export type TIconLink = AetherInput<typeof IconLink>
