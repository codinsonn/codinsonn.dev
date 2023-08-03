import React from 'react'
// Navigation
import { useAetherRoute, fetchAetherProps, Link } from 'aetherspace/navigation'
// Schemas
import { z, aetherSchema, AetherParams, AetherProps } from 'aetherspace/schemas'
import { ResumeData } from '../schemas'
// Mocks
import { dummyResumeData } from '../mocks/resumeData.mock'
// Primitives
import { View, Image, Text } from 'aetherspace/primitives'
import { H1, H2, H3, P } from 'aetherspace/html-elements'
// Components
import { AetherIcon } from 'aetherspace/components'
import { ResumeContactSection, ResumeIntroCard } from '../components'
// Styles
import { twStyled } from 'aetherspace/styles'
// Utils
import { uppercaseFirstChar } from 'aetherspace/utils'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  slug: 'Slug of the resume data to fetch if data is not in props.',
}

/* --- Schemas & Types ------------------------------------------------------------------------- */

// -i- TODO: Change these schemas to match your route's parameter needs
const ResumeScreenParams = aetherSchema('ResumeScreenParams', {
  slug: z.string().default('codinsonn').describe(d.slug),
})

// -i- TODO: Change these schemas to match your screen's prop needs
const ResumeScreenProps = ResumeData.extendSchema('ResumeScreenProps', {
  params: ResumeScreenParams.optional(),
  segment: z.string().optional(),
}).example({
  params: { slug: 'codinsonn' },
  segment: undefined,
  ...dummyResumeData,
})

export type TResumeScreenParams = AetherParams<typeof ResumeScreenParams>
export type TResumeScreenProps = AetherProps<typeof ResumeScreenProps>

/* --- GraphQL & Data Fetching ----------------------------------------------------------------- */

// -i- Figure out which data you need at /api/graphql and replace this dummy data in the query below
const ResumeScreenDataQuery = `
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
  }
}
`

/// -i- TODO: Function to get the GraphQL variables that will be used to fetch the data for this screen
/** -i- GraphQL query that will fetch all data we need for this screen */
const getResumeScreenArgs = (params: TResumeScreenParams = {}) => ({
  getResumeDataByUserSlugArgs: ResumeScreenParams.parse(params), // example
})

/** -i- Function to actually fetch the data for this screen, where queryKey is likely the GQL query */
const getResumeScreenProps = async (queryKey: string, queryVariables?: TResumeScreenParams) => {
  const queryData = queryKey || ResumeScreenDataQuery
  const queryInput = queryVariables || getResumeScreenArgs() // example, uses defaults if not defined
  const { data } = await fetchAetherProps(queryData, queryInput)
  return data.getResumeDataByUserSlug as TResumeScreenProps // example
}

/** -i- Bundled config for getting the screen data, including query, variables, and data fetcher */
export const ResumeScreenRouteDataConfig = {
  query: ResumeScreenDataQuery,
  getGraphqlVars: getResumeScreenArgs,
  getGraphqlData: getResumeScreenProps,
  paramSchema: ResumeScreenParams,
  propSchema: ResumeScreenProps,
  backgroundColor: '#111827',
}

/* --- Route Segments -------------------------------------------------------------------------- */

// -i- https://nextjs.org/docs/app/api-reference/file-conventions/route-segment-config
export const dynamic = 'auto' // 'auto' | 'force-dynamic' | 'error' | 'force-static'

/* --- <ResumeScreen/> ------------------------------------------------------------------------- */

export const ResumeScreen = (props: TResumeScreenProps) => {
  // Props & Data
  const [screenData, { error }] = useAetherRoute(props, ResumeScreenRouteDataConfig)
  const { slug, generalData, contactLinks } = screenData

  // -- Guards --

  if (error) {
    return (
      <View tw="w-full h-full items-center justify-center">
        <H1 tw="text-red-500">Error: {error.message}</H1>
      </View>
    )
  }

  // -- Render --

  return (
    <StScreenContainer>
      <StResumeContainer>
        <ResumeIntroCard {...generalData} />

        <Spacing tw="h-16" />

        <ResumeContactSection contactLinks={contactLinks} />
      </StResumeContainer>
    </StScreenContainer>
  )
}

/* --- Styles ---------------------------------------------------------------------------------- */

const StScreenContainer = twStyled.View`w-full h-full items-center px-4`

const StResumeContainer = twStyled.Article`max-w-[580px] py-16`

const Spacing = twStyled.View``

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = ResumeScreenProps.introspect()

export const getDocumentationParams = {
  backgrounds: {
    default: 'bg-gray-900',
    values: [{ name: 'bg-gray-900', value: '#1a202c' }],
  },
}

/* --- Exports --------------------------------------------------------------------------------- */

export default ResumeScreen
