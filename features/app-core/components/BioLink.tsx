import React from 'react'
// Schemas
import { z, aetherSchema, AetherProps } from 'aetherspace/schemas'
// Navigation
import { Link, useAetherNav } from 'aetherspace/navigation'
// Primitives
import { View, Image, Pressable } from 'aetherspace/primitives'

/* --- Schemas & Types ------------------------------------------------------------------------- */

const BioLinkProps = aetherSchema('BioLinkProps', {
  title: z.string().eg("'Move fast & build things', with Zod, Expo & Next.js"),
  subTitle: z.string().optional().eg('An intro to Aetherspace and the GREEN stack'),
  linkUrl: z.string().eg('https://codinsonn.dev'),
  imageUrl: z.string().eg('https://codinsonn.dev/img/FSMeetup.jpeg'),
})

/* --- <BioLink/> ---------------------------------------------------------------------------- */

export const BioLink = (props: AetherProps<typeof BioLinkProps>) => {
  // Props
  const { title, subTitle, linkUrl, imageUrl } = props

  // Hooks
  const { openLink } = useAetherNav()

  // -- Render --

  return (
    <Pressable
      accessibilityRole="button"
      tw="h-[100px] docs:max-w-[600px] flex-row rounded-md overflow-hidden bg-slate-800"
      onPress={() => openLink(linkUrl)}
    >
      <View tw="relative w-[90px] xs:w-[100px] sm:w-[120px] h-[100px]">
        <Link href={linkUrl}>
          <Image
            src={imageUrl}
            alt="Picture of the author"
            tw="w-[90px] xs:w-[100px] sm:w-[120px] h-[100px] items-center bg-slate-100 overflow-hidden"
            width={100 * (1400 / 1100)}
            height={100} // @ts-ignore
            objectFit="cover"
          />
        </Link>
      </View>
      <View tw="flex-shrink self-stretch overflow-hidden px-2 xs:px-3 py-2 xs:py-3">
        <Link href={linkUrl} tw="roboto-bold text-white flex-shrink text-sm sm:text-base" isText>
          {title}
        </Link>
        <View tw="h-1" />
        {subTitle && (
          <Link href={linkUrl} tw="roboto text-white flex-shrink text-xs" isText>
            {subTitle}
          </Link>
        )}
      </View>
    </Pressable>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = BioLinkProps.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default BioLink
