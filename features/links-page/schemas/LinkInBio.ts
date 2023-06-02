import { z, aetherSchema } from 'aetherspace/schemas'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  id: `Id of card link`,
  title: `Title of card link`,
  subTitle: `Subtitle of the card for this link`,
  link: `Card link`,
  imageUrl: `Image url of link`,
  iconComponent: `Icon component name`,
  isFeatured: `Is this a featured link?`,
}

/** --- LinkInBio ------------------------------------------------------------------------------ */
/** -i- Single source of truth for the actual link cards that renders under the bio icon links */
export const LinkInBio = aetherSchema('LinkInBio', {
  id: z.string().id().describe(d.id),
  title: z.string().eg("'Move fast & build things', with Zod, Expo & Next.js").describe(d.title),
  subTitle: z.string().optional().eg('An intro to Aetherspace and the GREEN stack').describe(d.subTitle), // prettier-ignore
  link: z.string().eg('https://codinsonn.dev').describe(d.link),
  imageUrl: z.string().optional().eg('https://codinsonn.dev/img/FSMeetup.jpeg').describe(d.imageUrl), // prettier-ignore
  iconComponent: z.string().optional().describe('Icon component name').describe(d.iconComponent),
  isFeatured: z.boolean().optional().eg(true).describe(d.isFeatured),
})

/** -i- Single source of truth for the actual link cards that renders under the bio icon links */
export type TLinkInBio = z.infer<typeof LinkInBio>
