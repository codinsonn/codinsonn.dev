import { AetherInput, z } from 'aetherspace/schemas'
import { BaseLinkData } from './BaseLinkData'
import { SocialLinkType } from './links.enums'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  SocialLinkData: `Datastructure for one social link`,
  socialLinkType: `the type of link this is (e.g. custom or social platform key)`,
  platformUsername: `the username for the platform, if linkType is a social platform`,
}

/** --- SocialLinkData ----------------------------------------------------------------------- */
/** -i- Datastructure for one social link */
export const SocialLinkData = BaseLinkData.extendSchema('SocialLinkData', {
  socialLinkType: SocialLinkType.default('custom').describe(d.socialLinkType),
  platformUsername: z.string().optional().describe(d.platformUsername),
}).describe(d.SocialLinkData)

/** -i- Datastructure for one social link */
export type TSocialLinkData = AetherInput<typeof SocialLinkData>
