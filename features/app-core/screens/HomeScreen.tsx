import React from 'react'
import { StatusBar } from 'expo-status-bar'
// Navigation
import { Link, useAetherNav } from 'aetherspace/navigation'
// Schemas
import { ats, applySchema } from 'aetherspace/schemas'
// Primitives
import { View, Text, Image, Pressable } from 'aetherspace/primitives'
// SEO
import { H1 } from 'aetherspace/html-elements'
// Icons
import { GraphIcon, ReactIcon, ExpoIcon, StorybookIcon, NextIcon } from '../icons'

/* --- Schemas --------------------------------------------------------------------------------- */

const PropSchema = ats.schema('HomeScreenProps', {})

/* --- <HomeScreen/> --------------------------------------------------------------------------- */

const HomeScreen = (props) => {
  // Props
  applySchema(props, PropSchema)

  // Hooks
  const { openLink } = useAetherNav()

  // Vars
  const ICON_COLOR = '#FFFFFF'
  const ICON_SIZE = 32

  // -- Render --

  return (
    <View tw="w-full h-full items-center px-4 bg-gray-900 pt-12 md:pt-8">
      <StatusBar style="auto" />
      <Link to="/author">
        <Image
          src="/img/CodelyFansLogoPic160x160.jpeg"
          alt="App Icon"
          tw="w-20 h-20 mt-0 mb-3 overflow-hidden bg-slate-100 rounded-full"
        />
      </Link>
      <H1 tw="text-white pb-3 roboto-bold font-bold text-base ">@codinsonn.dev ⚡️</H1>
      <View tw="flex-row">
        <Link href="https://expo.dev/home" tw="px-2">
          <ExpoIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
        </Link>
        <Link href="https://nextjs.org/" tw="px-2">
          <NextIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
        </Link>
        <Link href="https://reactnative.dev/" tw="px-2">
          <ReactIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
        </Link>
        <Link href="https://storybook.js.org/docs/react/why-storybook" tw="px-2">
          <StorybookIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
        </Link>
        <Link href="https://www.apollographql.com/docs/intro/benefits" tw="px-2">
          <GraphIcon width={ICON_SIZE} height={ICON_SIZE} fill={ICON_COLOR} />
        </Link>
      </View>
      <Text tw="md:w-2/3 lg:w-1/2 pt-5 pb-3 px-4 text-white text-center text-sm">
        {`👾  Dev Memes & JS/React Dreams  🙈  Programmer puns • {...💚 } GREEN stack dev
👕  Coding Merch  🤖  Laptop Stickers  ☕  Covfefe Mugs  🎓  JS/TS Coding tips and tricks by @codinsonn ⚡`}
      </Text>
    </View>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = PropSchema

/* --- Exports --------------------------------------------------------------------------------- */

export default HomeScreen
