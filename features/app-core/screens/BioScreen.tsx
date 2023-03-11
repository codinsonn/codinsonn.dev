import React from 'react'
import { StatusBar } from 'expo-status-bar'
import useSWR from 'swr'
// Navigation
import { Link, useAetherNav, fetchAetherProps, AetherPage } from 'aetherspace/navigation'
// Schemas
import { z, aetherSchema } from 'aetherspace/schemas'
import { UserBio } from '../schemas/UserBio.schema'
// Primitives
import { View, Text, Image } from 'aetherspace/primitives'
// SEO
import { H1 } from 'aetherspace/html-elements'
// Icons
import * as Icons from '../icons'

/* --- Schemas & Types ------------------------------------------------------------------------- */

const ParamSchema = aetherSchema('BioScreenParams', {
  slug: z.string().optional(),
})

const PropSchema = aetherSchema('BioScreenProps', {
  params: ParamSchema.optional(),
  data: z.object({
    getUserBio: UserBio,
  }),
})

type BioScreenProps = Partial<z.infer<typeof PropSchema>>

/* --- GraphQL & Data Fetching ----------------------------------------------------------------- */

const getUserBioQuery = `
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

const getUserBioVars = (slug = 'codinsonn') => ({
  getUserBioArgs: {
    slug,
  },
})

const getAetherProps = async (queryKey, queryVariables) => {
  const { data } = await fetchAetherProps(
    queryKey || getUserBioQuery,
    queryVariables || getUserBioVars
  )
  return data
}

export const generateStaticParams = async () => [{ slug: 'codinsonn' }]

/* --- Render Strategy ------------------------------------------------------------------------ */

export const dynamic = 'force-static' // 'auto' | 'force-dynamic' | 'error' | 'force-static'

/* --- <BioScreen/> --------------------------------------------------------------------------- */

const BioScreen = (props: BioScreenProps) => {
  // Nav
  const { params, openLink } = useAetherNav(props)
  const { slug = 'codinsonn' } = (params as BioScreenProps['params']) || {}
  const queryParams = getUserBioVars(slug)

  // Fetch
  const swrCall = useSWR<BioScreenProps['data']>(
    [getUserBioQuery, queryParams],
    ([gqlQuery, gqlParams]) => getAetherProps(gqlQuery, gqlParams)
  )

  // Data
  const { getUserBio: bioData } = props.data || swrCall.data || {}

  console.log('BioScreen:', { slug, bioData, props })

  // Vars
  const ICON_COLOR = '#FFFFFF'
  const ICON_SIZE = 27

  // -- Guards --

  if (!bioData) return <Text>{JSON.stringify({ slug, bioData, props }, null, 4)}</Text>

  // -- Render --

  return (
    <View tw="w-full h-full items-center bg-gray-900 mobile:pt-14 pt-10">
      <StatusBar style="auto" />
      <Link to={params?.slug ? '/' : '/bio/codinsonn'}>
        <Image
          src={bioData.imageUrl}
          alt="Picture of the author"
          tw="w-20 h-20 mt-0 overflow-hidden bg-slate-100 rounded-full"
        />
      </Link>
      <H1
        tw="text-white mb-4 roboto font-bold text-base"
        onPress={() => openLink(bioData.titleLink)}
      >
        {bioData.title}
      </H1>
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
    </View>
  )
}

/* --- SSR ------------------------------------------------------------------------------------- */

export const PageScreen = (props: BioScreenProps) => {
  // Nav
  const { params } = useAetherNav(props)
  const { slug = 'codinsonn' } = (params as BioScreenProps['params']) || {}
  const queryParams = getUserBioVars(slug)

  console.log('PageScreen:', { slug, params, queryParams })

  // -- Return --

  return (
    <AetherPage
      {...props}
      PageScreen={BioScreen}
      fetcher={getAetherProps}
      fetchKey={[getUserBioQuery, queryParams]}
    />
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = PropSchema.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default BioScreen
