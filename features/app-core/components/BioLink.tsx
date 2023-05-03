import React from 'react'
// Schemas
import { AetherProps } from 'aetherspace/schemas'
// Navigation
import { Link, useAetherNav } from 'aetherspace/navigation'
// Primitives
import { View, Image, Pressable } from 'aetherspace/primitives'
import { LinkInBio } from '../schemas/UserBio.schema'

/* --- Schemas & Types ------------------------------------------------------------------------- */

const BioLinkProps = LinkInBio.nameSchema('BioLinkProps')

/* --- <BioLink/> ---------------------------------------------------------------------------- */

export const BioLink = (props: AetherProps<typeof BioLinkProps>) => {
  // Props
  const { title, subTitle, link, imageUrl } = props

  // Hooks
  const { openLink } = useAetherNav()

  // -- Render --

  return (
    <Pressable
      accessibilityRole="button"
      tw="h-[100px] docs:max-w-[600px] flex-row rounded-md overflow-hidden bg-slate-800"
      onPress={() => openLink(link)}
    >
      <View tw="relative w-[90px] xs:w-[100px] sm:w-[120px] h-[100px]">
        <Link href={link}>
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
        <Link href={link} tw="roboto-bold text-white flex-shrink text-sm sm:text-base" isText>
          {title}
        </Link>
        <View tw="h-1" />
        {subTitle && (
          <Link href={link} tw="roboto text-white flex-shrink text-xs" isText>
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
