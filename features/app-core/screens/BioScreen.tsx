import React from 'react'
// Navigation
import { Link, useAetherRoute, fetchAetherProps, useAetherNav } from 'aetherspace/navigation'
// Schemas
import { z, aetherSchema } from 'aetherspace/schemas'
import { UserBio } from '../schemas/UserBio.schema'
// Primitives
import { View, Text, Image } from 'aetherspace/primitives'
// SEO
import { H1 } from 'aetherspace/html-elements'
// Icons
import * as Icons from '../icons'
// Utils
import { isEmpty } from 'aetherspace/utils'
import BioLink from '../components/BioLink'

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
})

export type BioScreenParams = Partial<z.infer<typeof BioParamsSchema>>
export type BioScreenProps = Partial<z.infer<typeof BioScreenSchema>>

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
    }
  }
`

const getBioScreenDataVars = (params: BioScreenParams = {}) => ({
  getUserBioArgs: BioParamsSchema.parse(params),
})

const getBioScreenProps = async (queryKey: string, queryVariables?: BioScreenParams) => {
  const queryData = queryKey || getScreenDataQuery
  const queryInput = queryVariables || getBioScreenDataVars()
  const { data } = await fetchAetherProps(queryData, queryInput)
  return data.getUserBio as UserBio
}

export const screenConfig = {
  query: getScreenDataQuery,
  getGraphqlVars: getBioScreenDataVars,
  getGraphqlData: getBioScreenProps,
  paramSchema: BioParamsSchema,
  propSchema: BioScreenSchema,
}

/* --- Segments -------------------------------------------------------------------------------- */

export const dynamic = 'force-dynamic' // 'auto' | 'force-dynamic' | 'error' | 'force-static'

export const generateStaticParams = async (): Promise<BioScreenParams[]> => {
  return [{ slug: 'codinsonn' }]
}

/* --- <BioScreen/> ---------------------------------------------------------------------------- */

export const BioScreen = (props: BioScreenProps) => {
  // Data
  const [bioData] = useAetherRoute(props, screenConfig)
  const { pathname } = useAetherNav()

  // Vars
  const ICON_COLOR = '#FFFFFF'
  const ICON_SIZE = 27

  // Flags
  const isCustomBio = pathname.includes('/bio/')

  // -- Guards --

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
      <Text tw="md:w-2/3 lg:w-1/2 mb-4 px-6 text-white text-center text-sm">{bioData.bioText}</Text>
      <View tw="flex-row mt-6 mobile:mt-4 justify-center">
        {bioData.iconLinks.map((bioIcon) => {
          const Icon = Icons[bioIcon.iconComponent]
          return (
            <Link
              key={bioIcon.iconComponent}
              href={bioIcon.link}
              tw={['px-2 lg:px-3', bioIcon.extraClasses]}
            >
              <Icon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
            </Link>
          )
        })}
      </View>
      <View tw="max-w-[600px] w-full lg:w-3/4 xl:w-2/4 flex-column mt-12 px-5">
        <BioLink
          title="Talk at Newline.gent -- An intro to aetherspace"
          linkUrl="https://www.youtube.com/watch?v=njhgS-erQbo"
          imageUrl="https://i3.ytimg.com/vi/njhgS-erQbo/maxresdefault.jpg"
        />
        <View tw="h-5" />
      </View>
    </View>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

// export const getDocumentationProps = BioScreenSchema.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default BioScreen
