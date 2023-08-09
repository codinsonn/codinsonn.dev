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
  const { linkTitle, subTitle, linkUrl, imageUrl } = props

  // Hooks
  const { openLink } = useAetherNav()

  // -- Render --

  return (
    <StLinkWrapper role="button" onPress={() => openLink(linkUrl)}>
      <StImageWrapper>
        <Link href={linkUrl}>
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
        <Link
          href={linkUrl}
          tw="font-primary-bold text-primary flex-shrink text-sm sm:text-base"
          isText
        >
          {linkTitle}
        </Link>
        <StSpacing tw="h-1" />
        {subTitle && (
          <Link href={linkUrl} tw="text-primary flex-shrink body-xs-regular" isText>
            {subTitle}
          </Link>
        )}
      </StTextWrappers>
    </StLinkWrapper>
  )
}

/* --- Styles ---------------------------------------------------------------------------------- */

const StLinkWrapper = twStyled.Pressable`
  h-[100px] docs:max-w-[600px] flex-row rounded-md overflow-hidden bg-secondary
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
