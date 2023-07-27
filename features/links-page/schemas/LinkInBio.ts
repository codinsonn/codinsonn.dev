import { z, AetherInput } from 'aetherspace/schemas'
import { BaseLinkData } from './BaseLinkData'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  LinkInBio: `Single source of truth for the actual link cards that renders under the bio page links`,
  subTitle: `Subtitle of the card for this link`,
  imageUrl: `Image url of link`,
  isFeatured: `Is this a featured link?`,
}

/** --- LinkInBio ------------------------------------------------------------------------------ */
/** -i- Single source of truth for the actual link cards that renders under the bio icon links */
export const LinkInBio = BaseLinkData.extendSchema('LinkInBio', {
  subTitle: z.string().optional().eg('An intro to Aetherspace and the GREEN stack').describe(d.subTitle), // prettier-ignore
  imageUrl: z.string().optional().eg('https://codinsonn.dev/img/FSMeetup.jpeg').describe(d.imageUrl), // prettier-ignore
  isFeatured: z.boolean().optional().eg(true).describe(d.isFeatured),
}).describe(d.LinkInBio)

/** -i- Single source of truth for the actual link cards that renders under the bio icon links */
export type TLinkInBio = AetherInput<typeof LinkInBio>
