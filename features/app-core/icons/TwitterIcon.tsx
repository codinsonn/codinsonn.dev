import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { z, aetherSchema, AetherProps } from 'aetherspace/schemas'

/* --- Schema ---------------------------------------------------------------------------------- */

const PropSchema = aetherSchema('RedbubbleIconProps', {
  width: z.number().default(24).describe('Icon width'),
  height: z.number().default(24).describe('Icon height'),
  fill: z.string().color().default('#1DA1F2').describe('Icon fill color'),
})

/* --- <TwitterIcon/> -------------------------------------------------------------------------- */

const TwitterIcon = (props: AetherProps<typeof PropSchema>) => {
  // Props
  const svgProps = PropSchema.parse(props)
  const { fill } = svgProps
  // Render
  return (
    <Svg viewBox="0 0 24 24" {...svgProps}>
      <Path
        d="M23.954 4.569a10 10 0 0 1-2.825.775 4.958 4.958 0 0 0 2.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 0 0-8.384 4.482C7.691 8.094 4.066 6.13 1.64 3.161a4.822 4.822 0 0 0-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 0 1-2.228-.616v.061a4.923 4.923 0 0 0 3.946 4.827 4.996 4.996 0 0 1-2.212.085 4.937 4.937 0 0 0 4.604 3.417 9.868 9.868 0 0 1-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0 0 7.557 2.209c9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63a9.936 9.936 0 0 0 2.46-2.548l-.047-.02z"
        fill={fill}
      />
    </Svg>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = PropSchema.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default TwitterIcon
