import React from 'react'
// Schemas
import { z, aetherSchema } from 'aetherspace/schemas'
// Navigation
import { Link } from 'aetherspace/navigation'
// Primitives
import { View, Text, Image } from 'aetherspace/primitives'

/* --- Schemas & Types ------------------------------------------------------------------------- */

const BioLinkProps = aetherSchema('BioLinkProps', {
  title: z.string(),
  linkUrl: z.string(),
  imageUrl: z.string(),
})

/* --- <BioLink/> ---------------------------------------------------------------------------- */

export const BioLink = (props: z.infer<typeof BioLinkProps>) => {
  // Props
  const { title, linkUrl, imageUrl } = props

  // -- Render --

  return (
    <Link tw="h-[100px] flex-row rounded-md overflow-hidden bg-slate-800" href={linkUrl}>
      <Image
        src={imageUrl}
        alt="Picture of the author"
        tw="w-[100px] h-[100px] items-center overflow-hidden"
        width={100 * (256 / 144)}
        height={100} // @ts-ignore
        objectFit="cover"
      />
      <View tw="flex-row flex-grow flex-shrink p-4 whitespace-normal">
        <Text tw="roboto-bold text-base text-white">{title}</Text>
      </View>
    </Link>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

// export const getDocumentationProps = BioLinkSchema.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default BioLink
