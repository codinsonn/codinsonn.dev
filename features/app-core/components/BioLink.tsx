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
    <Link tw="h-[100px] flex-row rounded-md overflow-hidden bg-slate-800" href={linkUrl}>
      <Image
        src={imageUrl}
        alt="Picture of the author"
        tw="w-[90px] sm:w-[120px] h-[100px] items-center overflow-hidden"
        width={100 * (1400 / 1100)}
        // width={130 * (256 / 144)}
        height={100} // @ts-ignore
        objectFit="cover"
      />
      <View tw="flex-col flex-grow flex-shrink px-4 py-2 lg:py-4">
        <Text tw="roboto-bold text-white text-sm sm:text-base">{title}</Text>
        <View tw="pt-1" />
        {subTitle && <Text tw="roboto text-white text-xs">{subTitle}</Text>}
      </View>
    </Link>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

// export const getDocumentationProps = BioLinkSchema.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default BioLink
