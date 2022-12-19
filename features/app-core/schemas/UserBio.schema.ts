// Schemas
import { ats, Infer } from 'aetherspace/schemas'

/* --- Schemas --------------------------------------------------------------------------------- */

export const IconLinks = ats.schema('IconLinks', {
  id: ats.string().docs('id', 'Id of icon link'),
  iconKey: ats.string().optional().docs('iconKey', 'Icon key'),
  iconComponent: ats.string().docs('iconComponent', 'Icon component name'),
  link: ats.string().docs('link', 'Link attached to the icon'),
  sortOrder: ats.number().optional().docs('sortOrder', 'Sort order of icon'),
  extraClasses: ats.string().optional().docs('extraClasses', 'Extra classes to add to icon'),
})

export const UserBioInput = ats.schema('UserBio', {
  slug: ats.string().docs('slug', 'Slug of bio to fetch'),
})

export const UserBio = ats.schema('GetUserBioResponse', {
  slug: UserBioInput.schema.slug,
  title: ats.string().docs('title', 'Title of bio'),
  titleLink: ats.string().docs('titleLink', 'Link to title'),
  bioText: ats.string().docs('bioText', 'Bio text'),
  imageUrl: ats.string().docs('imageUrl', 'Image url'),
  iconLinks: ats.array(IconLinks).docs('iconLinks', 'Icon links'),
})

/* --- Types ----------------------------------------------------------------------------------- */

export type IconLink = Infer<typeof IconLinks>
export type UserBioInput = Infer<typeof UserBioInput>
export type UserBio = Infer<typeof UserBio>
