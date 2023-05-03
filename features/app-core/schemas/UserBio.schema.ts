// Schemas
import { z, aetherSchema, AetherInput } from 'aetherspace/schemas'

/* --- Schemas --------------------------------------------------------------------------------- */

export const IconLink = aetherSchema('IconLink', {
  id: z.string().describe('Id of icon link'),
  iconKey: z.string().optional().describe('Icon key'),
  iconComponent: z.string().describe('Icon component name'),
  link: z.string().describe('Link attached to the icon'),
  sortOrder: z.number().optional().describe('Sort order of icon'),
  extraClasses: z.string().optional().describe('Extra classes to add to icon'),
})

export const UserBioInput = aetherSchema('UserBioInput', {
  slug: z.string().describe('Slug of bio to fetch'),
})

export const LinkInBio = aetherSchema('LinkInBio', {
  id: z.string().describe('Id of link in bio'),
  title: z.string().eg("'Move fast & build things', with Zod, Expo & Next.js"),
  subTitle: z.string().optional().eg('An intro to Aetherspace and the GREEN stack'),
  link: z.string().eg('https://codinsonn.dev'),
  imageUrl: z.string().optional().eg('https://codinsonn.dev/img/FSMeetup.jpeg'),
  iconComponent: z.string().optional().describe('Icon component name'),
  isFeatured: z.boolean().optional().eg(true),
})

export const UserBio = aetherSchema('UserBio', {
  slug: UserBioInput.shape.slug,
  title: z.string().describe('Title of bio'),
  titleLink: z.string().describe('Link to title'),
  bioText: z.string().describe('Bio text'),
  imageUrl: z.string().describe('Image url'),
  iconLinks: z.array(IconLink).describe('Icon links'),
  linksInBio: z.array(LinkInBio).default([]).describe('Links in bio'),
})

/* --- Types ----------------------------------------------------------------------------------- */

export type IconLink = z.infer<typeof IconLink>
export type LinkInBio = z.infer<typeof LinkInBio>
export type UserBioInput = AetherInput<typeof UserBioInput>
export type UserBio = z.infer<typeof UserBio>
