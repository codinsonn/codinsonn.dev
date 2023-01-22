import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { z } from 'zod'
// Navigation
import { Link, useAetherNav } from 'aetherspace/navigation'
// Schemas
import { aetherSchema } from 'aetherspace/schemas'
import { UserBio } from '../schemas/UserBio.schema'
// Data
import { useGraphQL } from 'aetherspace/hooks'
// Primitives
import { View, Text, Image } from 'aetherspace/primitives'
// SEO
import { H1 } from 'aetherspace/html-elements'
// Icons
import * as Icons from '../icons'

/* --- Schemas --------------------------------------------------------------------------------- */

const PropSchema = aetherSchema('BioScreenProps', {
  data: UserBio,
})

/* --- GraphQL -------------------------------------------------------------------------------- */

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

const getUserBioVars = {
  getUserBioArgs: {
    slug: 'codinsonn',
  },
}

type GetUserBioResponse = {
  getUserBio: UserBio
}

/* --- Types ---------------------------------------------------------------------------------- */

type BioScreenProps = Partial<z.infer<typeof PropSchema>>

/* --- <BioScreen/> --------------------------------------------------------------------------- */

const BioScreen = (props: BioScreenProps) => {
  // Data
  const { data, isLoading, error } = useGraphQL<GetUserBioResponse>(getUserBioQuery, getUserBioVars)
  const { getUserBio: bioData } = data || {}

  // Hooks
  const { openLink } = useAetherNav()

  // Vars
  const ICON_COLOR = '#FFFFFF'
  const ICON_SIZE = 27

  // -- Guards --

  if (!bioData || isLoading || !!error) return null

  // -- Test --

  // return (
  //   <View tw="w-full h-full items-center bg-gray-900 mobile:pt-14 pt-10">
  //     <Text tw="text-white">Hello World</Text>
  //   </View>
  // )

  // -- Render --

  return (
    <View tw="w-full h-full items-center bg-gray-900 mobile:pt-14 pt-10">
      <StatusBar style="auto" />
      <Link to="/">
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

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = PropSchema.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default BioScreen
