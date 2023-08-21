import React from 'react'
// Navigation
import { Link, useAetherRoute, fetchAetherProps, useAetherNav } from 'aetherspace/navigation'
// Schemas
import { z, aetherSchema, AetherParams, AetherProps } from 'aetherspace/schemas'
import { TUserBio, UserBio } from '../schemas'
// Primitives
import { View, Text, Image } from 'aetherspace/primitives'
// SEO
import { H1 } from 'aetherspace/html-elements'
// Components
import { BioSkeleton } from '../components/BioSkeleton'
import BioLink from '../components/BioLink'
import { AetherIcon } from 'aetherspace/components'
// Utils
import { isEmpty } from 'aetherspace/utils'
// Mocks
import { userBioMock } from '../mocks/userBio.mock'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  slug: 'Slug of the user bio to fetch if data is not in props.',
}

/* --- Schemas & Types ------------------------------------------------------------------------- */

const BioParamsSchema = aetherSchema('BioScreenParams', {
  slug: z.string().default('codinsonn').describe(d.slug),
})

const BioScreenSchema = UserBio.extendSchema('BioScreenProps', {
  params: BioParamsSchema.optional(),
  segment: z.string().optional(),
}).example({
  params: { slug: 'codinsonn' },
  segment: undefined,
  ...userBioMock,
})

export type BioScreenParams = AetherParams<typeof BioParamsSchema>
export type BioScreenProps = AetherProps<typeof BioScreenSchema>

/* --- GraphQL & Data Fetching ----------------------------------------------------------------- */

const getScreenDataQuery = `
  query($getUserBioArgs: UserBioInput!) {
    getUserBio(args: $getUserBioArgs) {
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
`

const getBioScreenArgs = (params: BioScreenParams = {}) => ({
  getUserBioArgs: BioParamsSchema.parse(params),
})

const getBioScreenProps = async (queryKey: string, queryVariables?: BioScreenParams) => {
  const queryData = queryKey || getScreenDataQuery
  const queryInput = queryVariables || getBioScreenArgs() // Use defaults if not defined
  const { data } = await fetchAetherProps(queryData, queryInput)
  return data.getUserBio as TUserBio
}

export const screenConfig = {
  query: getScreenDataQuery,
  getGraphqlVars: getBioScreenArgs,
  getGraphqlData: getBioScreenProps,
  paramSchema: BioParamsSchema,
  propSchema: BioScreenSchema,
  refetchOnMount: false,
  backgroundColor: '#111827',
}

/* --- Segments -------------------------------------------------------------------------------- */

export const dynamic = 'force-static' // 'auto' | 'force-dynamic' | 'error' | 'force-static'

export const generateStaticParams = async (): Promise<BioScreenParams[]> => {
  return [{ slug: 'codinsonn' }]
}

/* --- <BioScreen/> ---------------------------------------------------------------------------- */

export const BioScreen = (props: BioScreenProps) => {
  // Data
  const [bioData, { error }] = useAetherRoute(props, screenConfig)
  const { pathname } = useAetherNav()

  // Vars
  const ICON_COLOR = '#FFFFFF'
  const ICON_SIZE = 27

  // Flags
  const isCustomBio = pathname?.includes('/bio/')

  // -- Guards --

  if (error) {
    return (
      <View tw="w-full h-full items-center bg-primary mobile:pt-14 pt-10">
        <H1 tw="text-primary body-md-bold">{`Error: ${error.message}`}</H1>
      </View>
    )
  }

  if (isEmpty(bioData) || !bioData.iconLinks) {
    return (
      <View tw="absolute top-0 w-full h-full items-center mobile:pt-14 pt-10">
        <View tw="max-w-[620px] w-full lg:w-3/4 xl:w-2/4 px-5 justify-center">
          <BioSkeleton />
        </View>
      </View>
    )
  }

  // -- Render --

  return (
    <View tw="w-full h-full items-center bg-primary mobile:pt-14 pt-10">
      <Link to={isCustomBio ? '/' : '/cv'}>
        <Image
          src={bioData.imageUrl}
          alt="Picture of the author"
          tw="w-20 h-20 mt-0 overflow-hidden bg-slate-100 rounded-full"
        />
      </Link>
      <Link to={bioData.titleLink} tw="mb-6 mt-2 no-underline" asText>
        <H1 tw="text-primary body-md-bold">{bioData.title}</H1>
      </Link>

      <Text tw="md:w-2/3 lg:w-1/2 mb-4 px-6 max-w-[620px] font-primary-regular text-primary text-center text-sm">
        {bioData.bioText}
      </Text>

      <View tw="flex-row mt-8 mb-14 mobile:mt-4 justify-center">
        {bioData.iconLinks.map((bioIcon) => (
          <Link
            key={bioIcon.linkIconKey}
            href={bioIcon.linkUrl!}
            tw={['px-1 xs:px-2 md:px-3', bioIcon.extraClasses]}
          >
            <AetherIcon name={bioIcon.linkIconKey} size={ICON_SIZE} fill={ICON_COLOR} />
          </Link>
        ))}
      </View>

      <H1 tw="text-primary body-lg-bold mb-6">Featured Links</H1>
      <View tw="max-w-[620px] w-full lg:w-3/4 xl:w-2/4 px-5">
        <View tw="flex relative overflow-hidden gap-y-6">
          {bioData.linksInBio?.map((bioLink) => (
            <View key={bioLink.id}>
              <BioLink
                key={bioLink.id}
                id={bioLink.id}
                linkUrl={bioLink.linkUrl}
                linkTitle={bioLink.linkTitle}
                subTitle={bioLink.subTitle}
                imageUrl={bioLink.imageUrl}
                linkIconKey={bioLink.linkIconKey}
                isFeatured={bioLink.isFeatured}
              />
            </View>
          ))}
        </View>
      </View>

      <View tw="max-w-[600px] w-full lg:w-3/4 xl:w-2/4 mt-8 px-5 items-center">
        <Text tw="font-primary-light text-slate-200 text-center text-sm sm:text-base">
          Ready for <Text tw="font-primary-regular">Organic leads</Text> from the Web,
        </Text>
        <Text tw="font-primary-light text-slate-200 text-center text-sm sm:text-base">
          *and* <Text tw="font-primary-regular">Higher conversions</Text> on Mobile?
        </Text>
        <View tw="h-3" />
        <Text tw="flex-row">
          <Link
            href="https://github.com/Aetherspace/green-stack-starter-demo#move-fast-and-build-things"
            tw="font-primary-regular text-primary text-sm"
            asText
          >
            Free template repo
          </Link>
          <Text tw="font-primary-regular text-primary text-sm">{' / '}</Text>
          <Link href="/resume" tw="font-primary-black text-primary underline text-sm" asText>
            Hire me.
          </Link>
        </Text>

        <View tw="h-10" />
      </View>
    </View>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = BioScreenSchema.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default BioScreen
