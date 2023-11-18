import React from 'react'
// Navigation
import { Link, useAetherRoute, useAetherNav } from 'aetherspace/navigation'
// Context
import { useAetherContext } from '../../../packages/@aetherspace/context'
// Schemas
import { z, aetherSchema, AetherParams, AetherProps, createDataBridge } from 'aetherspace/schemas'
import { UserBio } from '../schemas'
// Primitives
import { View, Text, Image } from 'aetherspace/primitives'
// SEO
import { H1 } from 'aetherspace/html-elements'
// Forms
// import { Button, CheckList, RadioGroup, TextInput } from 'aetherspace/forms'
// Components
import { BioSkeleton } from '../components/BioSkeleton'
import BioLink from '../components/BioLink'
import { AetherIcon } from 'aetherspace/components'
// Hooks
import { useTailwindStyles } from 'aetherspace/styles'
// Utils
import { isEmpty } from 'aetherspace/utils'
// Mocks
import { userBioMock } from '../mocks/userBio.mock'
import { GetUserBioBySlugDataBridge } from '../schemas/GetUserBioBySlugDataBridge'

/* --- Schemas & Types ------------------------------------------------------------------------- */

const d = {
  slug: 'Slug of the user bio to fetch if data is not in props.',
}

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

export const screenConfig = createDataBridge({
  ...GetUserBioBySlugDataBridge,
  paramsSchema: BioParamsSchema,
  propsSchema: BioScreenSchema,
  refetchOnMount: false,
  backgroundColor: '#111827',
})

export type BioScreenParams = AetherParams<typeof BioParamsSchema>
export type BioScreenProps = AetherProps<typeof BioScreenSchema>

/* --- Segments -------------------------------------------------------------------------------- */

export const dynamic = 'auto' // 'auto' | 'force-dynamic' | 'error' | 'force-static'

/* --- <BioScreen/> ---------------------------------------------------------------------------- */

export const BioScreen = (props: BioScreenProps) => {
  // Data
  const [bioData, { error }] = useAetherRoute(props, screenConfig)
  const { pathname } = useAetherNav()
  const { colorScheme, toggleColorScheme } = useAetherContext()

  // Vars
  const ICON_SIZE = 27

  // Flags
  const isCustomBio = pathname?.includes('/bio/')

  // -- Styles --

  const primaryTextStyles = useTailwindStyles('text-primary')

  const ICON_COLOR = (primaryTextStyles.color as string) ?? '#FFFFFF'

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

      <H1 tw="text-primary body-lg-bold mb-6" onPress={toggleColorScheme}>
        {`Featured Links`}
      </H1>
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
        <Text tw="font-primary-light text-secondary text-center text-sm sm:text-base">
          Ready for <Text tw="font-primary-regular">Organic leads</Text> from the Web,
        </Text>
        <Text tw="font-primary-light text-secondary text-center text-sm sm:text-base">
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

        <View tw="h-16" />

        {/*/}

        <Button
          type="primary"
          size="md"
          iconSize={20}
          link="https://github.com/Aetherspace/green-stack-starter-demo#readme"
          prefixIconName="aetherspace-logo"
          pressableClasses="rounded-md min-w-[300px]"
        >
          Universal App Starter
        </Button>

        <View tw="h-10" />

        <TextInput
          accessibilityLabel="Text input field"
          accessibilityHint="Text input field"
          value=""
          placeholder="Email"
          onChange={console.log}
        />

        <View tw="h-10" />

        <CheckList onChange={console.log}>
          <CheckList.Option value="value-1" label="Option 1" />
          <CheckList.Option value="value-2" label="Option 2" />
          <CheckList.Option value="value-3" label="Option 3" />
        </CheckList>

        <View tw="h-10" />

        <RadioGroup onChange={console.log}>
          <RadioGroup.Option value="value-1" label="Option 1" />
          <RadioGroup.Option value="value-2" label="Option 2" />
          <RadioGroup.Option value="value-3" label="Option 3" />
        </RadioGroup>

        <View tw="h-20" />

        {/**/}
      </View>
    </View>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = BioScreenSchema.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default BioScreen
