import React from 'react'
// Navigation
import {
  Link,
  useAetherRoute,
  fetchAetherProps,
  useAetherNav,
  BASE_URL,
  BACKEND_URL,
} from 'aetherspace/navigation'
// Schemas
import { z, aetherSchema, AetherParams, AetherProps } from 'aetherspace/schemas'
import { UserBio } from '../schemas/UserBio.schema'
// Primitives
import { View, Text, Image } from 'aetherspace/primitives'
// SEO
import { H1 } from 'aetherspace/html-elements'
// Icons
import * as Icons from '../icons'
// Components
import BioLink from '../components/BioLink'
// Utils
import { isEmpty } from 'aetherspace/utils'
// Constants
import { localURI } from 'aetherspace/constants/manifest'
// Mocks
import { userBioMock } from '../mocks/userBio.mock'

/* --- Schemas & Types ------------------------------------------------------------------------- */

const BioParamsSchema = aetherSchema('BioScreenParams', {
  slug: z
    .string()
    .default('codinsonn')
    .describe('Slug of the user bio to fetch if data is not in props.'),
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
        iconKey
        iconComponent
        link
        sortOrder
        extraClasses
      }
      linksInBio {
        id
        title
        subTitle
        link
        imageUrl
        iconComponent
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
  return data.getUserBio as UserBio
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

export const dynamic = 'auto' // 'auto' | 'force-dynamic' | 'error' | 'force-static'

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

  if (error)
    return (
      <View tw="w-full h-full items-center bg-gray-900 mobile:pt-14 pt-10">
        <H1 tw="text-white roboto-bold font-bold text-base">{`Error: ${error.message}`}</H1>
        <Text tw="text-white hidden xs:flex">{BASE_URL}</Text>
        <Text tw="text-white hidden xs:flex">{BACKEND_URL}</Text>
        <Text tw="text-white hidden xs:flex">{localURI}</Text>
      </View>
    )

  if (isEmpty(bioData) || !bioData.iconLinks) return null

  // -- Render --

  return (
    <View tw="w-full h-full items-center bg-gray-900 mobile:pt-14 pt-10">
      <Link to={isCustomBio ? '/' : '/bio/codinsonn'}>
        <Image
          src={bioData.imageUrl}
          alt="Picture of the author"
          tw="w-20 h-20 mt-0 overflow-hidden bg-slate-100 rounded-full"
        />
      </Link>
      <Link to={bioData.titleLink} tw=" mb-4 mt-4 no-underline" asText>
        <H1 tw="text-white roboto-bold font-bold text-base">{bioData.title}</H1>
      </Link>
      {/* -- TEST -- /}
      <Text tw="text-white hidden xs:flex">xs</Text>
      <Text tw="text-white hidden sm:flex">sm</Text>
      <Text tw="text-white hidden md:flex">md</Text>
      <Text tw="text-white hidden lg:flex">lg</Text>
      <Text tw="text-white hidden xl:flex">xl</Text>
      <Text tw="text-white hidden xxl:flex">xxl</Text>
      {/* -- TEST -- */}
      <Text tw="md:w-2/3 lg:w-1/2 mb-4 px-6 max-w-[620px] text-white text-center text-sm">
        {bioData.bioText}
      </Text>
      <View tw="flex-row mt-6 mobile:mt-4 justify-center">
        {bioData.iconLinks.map((bioIcon) => {
          const Icon = Icons[bioIcon.iconComponent]
          return (
            <Link
              key={bioIcon.iconComponent}
              href={bioIcon.link}
              tw={['px-1 xs:px-2 md:px-3', bioIcon.extraClasses]}
            >
              <Icon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
            </Link>
          )
        })}
      </View>
      <View tw="max-w-[620px] w-full lg:w-3/4 xl:w-2/4 mt-12 px-5">
        <View tw="flex relative overflow-hidden">
          {bioData.linksInBio.map((bioLink) => (
            <View key={bioLink.id} tw="mb-5">
              <BioLink
                key={bioLink.id}
                id={bioLink.id}
                title={bioLink.title}
                subTitle={bioLink.subTitle}
                link={bioLink.link}
                imageUrl={bioLink.imageUrl}
                iconComponent={bioLink.iconComponent}
                isFeatured={bioLink.isFeatured}
              />
            </View>
          ))}
        </View>
      </View>
      <View tw="max-w-[600px] w-full lg:w-3/4 xl:w-2/4 mt-2 px-5 items-center">
        <Text tw="roboto-light text-slate-200 text-center text-sm sm:text-base">
          Ready for <Text tw="roboto">Organic leads</Text> from Web
        </Text>
        <Text tw="roboto-light text-slate-200 text-center text-sm sm:text-base">
          + <Text tw="roboto">Higher conversions</Text> on Mobile?
        </Text>
        <View tw="h-3" />
        <Text tw="flex-row">
          <Link
            href="https://github.com/Aetherspace/green-stack-starter-demo#move-fast-and-build-things"
            tw="roboto text-white text-sm"
            asText
          >
            Free template repo
          </Link>
          <Text tw="roboto text-white text-sm">{' / '}</Text>
          <Link
            href="https://rok.co/@codinsonn"
            tw="roboto-black text-white underline text-sm"
            asText
          >
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