import React from 'react'
import { StatusBar } from 'expo-status-bar'
// Navigation
import { Link, useAetherNav } from 'aetherspace/navigation'
// Schemas
import { ats, applySchema } from 'aetherspace/schemas'
// Primitives
import { View, Text, Image } from 'aetherspace/primitives'
// SEO
import { H1 } from 'aetherspace/html-elements'
// Icons
import { ReactIcon } from '../icons'

/* --- Schemas --------------------------------------------------------------------------------- */

const PropSchema = ats.schema('BioScreenProps', {})

/* --- <BioScreen/> --------------------------------------------------------------------------- */

const BioScreen = (props) => {
  // Props
  applySchema(props, PropSchema)

  // Hooks
  const { openLink } = useAetherNav()

  // Vars
  const ICON_COLOR = '#FFFFFF'
  const ICON_SIZE = 32

  // -- Render --

  return (
    <View tw="w-full h-full items-center bg-gray-900 mobile:pt-14 pt-10">
      <StatusBar style="auto" />
      <Link to="/">
        <Image
          src="/img/CodelyFansLogoPic160x160.jpeg"
          alt="App Icon"
          tw="w-20 h-20 mt-0 overflow-hidden bg-slate-100 rounded-full"
        />
      </Link>
      <H1 tw="text-white mb-4 roboto-bold font-bold text-base">@codinsonn.dev</H1>
      <Text tw="md:w-2/3 lg:w-1/2 mb-4 px-6 text-white text-center text-sm">
        {`Dev Memes & GREEN stack dreams { ...💚 } Helping you take your react skills cross-platform 👾 ⚡️ 🤖 Typescript ⚡️ GraphQL ⚡️ React-Native ⚡️ Expo ⚡️ Next.js`}
      </Text>
      <View tw="flex-row mt-6">
        <Link
          href="https://github.com/codinsonn/green-stack-demo#move-fast-and-build-things"
          tw="px-2"
        >
          <ReactIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
        </Link>
        <Link
          href="https://github.com/codinsonn/green-stack-demo#move-fast-and-build-things"
          tw="px-2"
        >
          <ReactIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
        </Link>
        <Link
          href="https://github.com/codinsonn/green-stack-demo#move-fast-and-build-things"
          tw="px-2"
        >
          <ReactIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
        </Link>
        <Link
          href="https://github.com/codinsonn/green-stack-demo#move-fast-and-build-things"
          tw="px-2"
        >
          <ReactIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
        </Link>
        <Link
          href="https://github.com/codinsonn/green-stack-demo#move-fast-and-build-things"
          tw="px-2"
        >
          <ReactIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
        </Link>
      </View>
    </View>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = PropSchema

/* --- Exports --------------------------------------------------------------------------------- */

export default BioScreen
