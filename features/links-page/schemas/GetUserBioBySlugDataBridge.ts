import { createDataBridge } from 'aetherspace/schemas'
import { UserBio, UserBioInput } from './UserBio'

/** --- GraphQL -------------------------------------------------------------------------------- */
/** -i- Figure out which data you need at '/api/graphql' locally and apply it here */
/** -i- GraphQL query for the getUserBioBySlug() resolver */
export const UserBioBySlugQuery = `
  query($getUserBioBySlugArgs: UserBioInput!) {
    getUserBioBySlug(args: $getUserBioBySlugArgs) {
      slug
      title
      titleLink
      bioText
      imageUrl
      iconLinks {
        id
        linkUrl
        linkIconKey
        sortOrder
        extraClasses
      }
      linksInBio {
        id
        linkUrl
        linkTitle
        subTitle
        imageUrl
        linkIconKey
        isFeatured
      }
    }
  }
` as const

/** --- Data Bridge ---------------------------------------------------------------------------- */
/** -i- API Config for getResumeDataByUserSlug() */
export const GetUserBioBySlugDataBridge = createDataBridge({
  resolverName: 'getUserBioBySlug',
  argsSchema: UserBioInput,
  responseSchema: UserBio,
  graphqlQuery: UserBioBySlugQuery,
  apiPath: '/api/bio/[slug]',
  allowedMethods: ['GET', 'POST'],
})
