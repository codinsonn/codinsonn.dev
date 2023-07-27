import { z, aetherSchema, AetherInput } from 'aetherspace/schemas'
import { IconLink } from './IconLink'
import { LinkInBio } from './LinkInBio'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  id: `Id of bio`,
  slug: `Slug of bio to fetch`,
  title: `Title of bio`,
  titleLink: `Link to title`,
  bioText: `Bio text`,
  imageUrl: `Image url`,
  iconLinks: `Icon links`,
  linksInBio: `Links on bio page`,
}

/** --- UserBioInput --------------------------------------------------------------------------- */
/** -i- Arguments to retrieve UserBio data */
export const UserBioInput = aetherSchema('UserBioInput', {
  slug: z.string().describe(d.slug),
})

/** -i- Arguments to retrieve UserBio data */
export type TUserBioInput = AetherInput<typeof UserBioInput>

/** --- UserBio -------------------------------------------------------------------------------- */
/** -i- Single Source of Truth for link-in-bio page's overall user data structure */
export const UserBio = aetherSchema('UserBio', {
  id: z.string().id().optional().describe(d.id),
  slug: UserBioInput.shape.slug,
  title: z.string().describe(d.title),
  titleLink: z.string().describe(d.titleLink),
  bioText: z.string().describe(d.bioText),
  imageUrl: z.string().describe(d.imageUrl),
  iconLinks: IconLink.array().describe(d.iconLinks),
  linksInBio: LinkInBio.array().default([]).describe(d.linksInBio),
})

/** -i- Single Source of Truth for link-in-bio page's overall user data structure */
export type TUserBio = AetherInput<typeof UserBio>
