import React from 'react'
// Schemas
import { z, aetherSchema, AetherProps } from 'aetherspace/schemas'
// Navigation
import { Link } from 'aetherspace/navigation'
// Primitives
import { View, Text, Image } from 'aetherspace/primitives'

/* --- Schemas & Types ------------------------------------------------------------------------- */

const BioLinkProps = aetherSchema('BioLinkProps', {
  title: z.string(),
  subTitle: z.string().optional(),
  linkUrl: z.string(),
  imageUrl: z.string(),
})

/* --- <BioLink/> ---------------------------------------------------------------------------- */

export const BioLink = (props: AetherProps<typeof BioLinkProps>) => {
  // Props
  const { title, subTitle, linkUrl, imageUrl } = props

  // -- Render --

  return (
    <View tw="h-[100px] flex-row rounded-md overflow-hidden bg-slate-800">
      <View tw="relative w-[90px] xs:w-[100px] sm:w-[120px] h-[100px]">
        <Link href={linkUrl}>
          <Image
            src={imageUrl}
            alt="Picture of the author"
            tw="w-[90px] xs:w-[100px] sm:w-[120px] h-[100px] items-center overflow-hidden"
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
    </View>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

// export const getDocumentationProps = BioLinkSchema.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default BioLink
