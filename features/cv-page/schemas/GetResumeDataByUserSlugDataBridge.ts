import { z, aetherSchema, createDataBridge } from 'aetherspace/schemas'
import { ResumeData } from './ResumeData'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  GetResumeDataByUserSlugArgs: 'Args for the getResumeDataByUserSlug() resolver',
  GetResumeDataByUserSlugResponse: 'Response for the getResumeDataByUserSlug() resolver',
  slug: `the unique slug for a user's resume. Can be used to find and retrieve the resume data with`,
}

/** --- GetResumeDataByUserSlugArgs ------------------------------------------------------------ */
/** -i- Args for the getResumeDataByUserSlug() resolver */
export const GetResumeDataByUserSlugArgs = aetherSchema('GetResumeDataByUserSlugArgs', {
  slug: z.string().describe(d.slug),
}).describe(d.GetResumeDataByUserSlugArgs)

/** -i- Args for the getResumeDataByUserSlug() resolver */
export type GetResumeDataByUserSlugArgs = z.infer<typeof GetResumeDataByUserSlugArgs>

/** --- GetResumeDataByUserSlugResponse -------------------------------------------------------- */
/** -i- Response for the getResumeDataByUserSlug() resolver */
export const GetResumeDataByUserSlugResponse = ResumeData.describe(d.GetResumeDataByUserSlugResponse) // prettier-ignore

/** -i- Response for the getResumeDataByUserSlug() resolver */
export type GetResumeDataByUserSlugResponse = z.infer<typeof GetResumeDataByUserSlugResponse>

/** --- GraphQL -------------------------------------------------------------------------------- */
/** -i- Figure out which data you need at '/api/graphql' locally and apply it here */
/** -i- GraphQL query for the getResumeDataByUserSlug() resolver */
export const ResumeDataByUserSlugQuery = `
query($getResumeDataByUserSlugArgs: GetResumeDataByUserSlugArgs!) {
  getResumeDataByUserSlug(args: $getResumeDataByUserSlugArgs) {
    id
    slug
    generalData {
      profileImgUrl
      displayName
      functionTitle
      location
      pronouns
      website
      about
    }
    contactLinks {
      id
      linkUrl
      linkTitle
      linkIconKey
      sortOrder
      userId
      userSlug
      socialLinkType
      platformUsername
    }
    projects {
      id
      linkUrl
      linkTitle
      linkIconKey
      sortOrder
      userId
      userSlug
      title
      year
      collaborators
      description
      client
    }
    sideProjects {
      id
      linkUrl
      linkTitle
      linkIconKey
      sortOrder
      userId
      userSlug
      title
      year
      collaborators
      description
      client
    }
    writing {
      id
      linkUrl
      linkTitle
      linkIconKey
      sortOrder
      userId
      userSlug
      title
      year
      collaborators
      description
      publisher
    }
    speaking {
      id
      linkUrl
      linkTitle
      linkIconKey
      sortOrder
      userId
      userSlug
      title
      year
      collaborators
      description
      event
      location
    }
    awards {
      id
      linkUrl
      linkTitle
      linkIconKey
      sortOrder
      userId
      userSlug
      title
      year
      collaborators
      description
      presentedBy
    }
    features {
      id
      linkUrl
      linkTitle
      linkIconKey
      sortOrder
      userId
      userSlug
      title
      year
      collaborators
      description
      publisher
    }
    workExperience {
      id
      linkUrl
      linkTitle
      linkIconKey
      sortOrder
      userId
      userSlug
      title
      year
      collaborators
      description
      from
      to
      company
      location
    }
    volunteering {
      id
      linkUrl
      linkTitle
      linkIconKey
      sortOrder
      userId
      userSlug
      title
      year
      collaborators
      description
      from
      to
      company
      location
    }
    education {
      id
      linkUrl
      linkTitle
      linkIconKey
      sortOrder
      userId
      userSlug
      from
      to
      title
      institute
      location
      description
    }
    certifications {
      id
      linkUrl
      linkTitle
      linkIconKey
      sortOrder
      userId
      userSlug
      title
      year
      collaborators
      description
      issued
      expires
      name
      issuer
    }
    ctaSection {
      title
      ctaLinks {
        id
        linkUrl
        linkTitle
        linkIconKey
        sortOrder
        userId
        userSlug
        socialLinkType
        platformUsername
      }
    }
  }
}
`

/** --- Data Bridge ---------------------------------------------------------------------------- */
/** -i- API Config for getResumeDataByUserSlug() */
export const GetResumeDataByUserSlugDataBridge = createDataBridge({
  resolverName: 'getResumeDataByUserSlug',
  argsSchema: GetResumeDataByUserSlugArgs,
  responseSchema: GetResumeDataByUserSlugResponse,
  apiPath: '/api/resume/[slug]',
  allowedMethods: ['GET', 'POST'],
  graphqlQuery: ResumeDataByUserSlugQuery,
})
