import React from 'react'
// Schemas
import { AetherProps } from 'aetherspace/schemas'
// Navigation
import { Link, useAetherNav } from 'aetherspace/navigation'
// Schemas
import { LinkInBio } from '../schemas'
// Styles
import { twStyled } from 'aetherspace/styles'
// Primitives
import { Image } from 'aetherspace/primitives'

/* --- Schemas & Types ------------------------------------------------------------------------- */

const BioLinkProps = LinkInBio.nameSchema('BioLinkProps')

/* --- <BioLink/> ------------------------------------------------------------------------------ */

export const BioLink = (props: AetherProps<typeof BioLinkProps>) => {
  // Props
  const { title, subTitle, link, imageUrl } = props

  // Hooks
  const { openLink } = useAetherNav()

  // -- Render --

  return (
    <StLinkWrapper accessibilityRole="button" onPress={() => openLink(link)}>
      <StImageWrapper>
        <Link href={link}>
          <Image
            src={imageUrl}
            alt="Picture of the author"
            tw="w-[90px] xs:w-[100px] sm:w-[120px] min-h-[100px] items-center overflow-hidden"
            width={100 * (1400 / 1100)}
            height={100} // @ts-ignore
            objectFit="cover"
            transition={1000}
          />
        </Link>
      </StImageWrapper>
      <StTextWrappers>
        <Link href={link} tw="roboto-bold text-white flex-shrink text-sm sm:text-base" isText>
          {title}
        </Link>
        <StSpacing tw="h-1" />
        {subTitle && (
          <Link href={link} tw="roboto text-white flex-shrink text-xs" isText>
            {subTitle}
          </Link>
        )}
      </StTextWrappers>
    </StLinkWrapper>
  )
}

/* --- Styles ---------------------------------------------------------------------------------- */

const StLinkWrapper = twStyled.Pressable`
  h-[100px] docs:max-w-[600px] flex-row rounded-md overflow-hidden bg-slate-800
`

const StImageWrapper = twStyled.View`
  relative w-[90px] xs:w-[100px] sm:w-[120px] h-[100px]
`

const StTextWrappers = twStyled.View`
  flex-shrink self-stretch overflow-hidden px-2 xs:px-4 py-2 xs:py-3
`

const StSpacing = twStyled.View``

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = BioLinkProps.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default BioLink
