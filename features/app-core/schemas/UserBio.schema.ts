import { z } from 'zod'
// Schemas
import { aetherSchema } from 'aetherspace/schemas'

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
  slug: z.string().describe('Slug of bio to fetch').default('codinsonn'),
})

export const UserBio = aetherSchema('UserBio', {
  slug: UserBioInput.shape.slug,
  title: z.string().describe('Title of bio'),
  titleLink: z.string().describe('Link to title'),
  bioText: z.string().describe('Bio text'),
  imageUrl: z.string().describe('Image url'),
  iconLinks: z.array(IconLink).describe('Icon links'),
})

/* --- Types ----------------------------------------------------------------------------------- */

export type IconLink = z.infer<typeof IconLink>
export type UserBioInput = z.infer<typeof UserBioInput>
export type UserBio = z.infer<typeof UserBio>

export type GetUserBioResponse = {
  getUserBio: UserBio
}

/* --- GraphQL --------------------------------------------------------------------------------- */

export const GET_USER_BIO = `
  query($getUserBioArgs: UserBioInput!) {
    getUserBio(args: $getUserBioArgs) {
      slug
      title
      titleLink
      bioText
      imageUrl
      iconLinks {
        id
        iconKey
        iconComponent
        link
        sortOrder
        extraClasses
      }
    }
  }
`

export const getUserBioVars = <T extends UserBioInput = UserBioInput>(args: T) => {
  const { slug } = UserBioInput.parse(args)
  return {
    getUserBioArgs: {
      slug: slug!,
    },
  }
}
