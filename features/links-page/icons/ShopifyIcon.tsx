import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import { z, aetherSchema, AetherProps } from 'aetherspace/schemas'

/* --- Schema ---------------------------------------------------------------------------------- */

const PropSchema = aetherSchema('ShopifyIconProps', {
  size: z.number().default(24).describe('Icon dimensions, maps to both width and height'),
  fill: z.string().color().default('#95bf47').describe('Icon fill color'),
})

/* --- <ShopifyIcon/> -------------------------------------------------------------------------- */

const ShopifyIcon = (props: AetherProps<typeof PropSchema>) => {
  // Props
  const { size, fill, ...svgProps } = PropSchema.applyDefaults(props)
  // Render
  return (
    <Svg viewBox="0 0 109.5 124.5" width={size} height={size} fill={fill} {...svgProps}>
      <Path d="M74.7 14.8s-1.4.4-3.7 1.1c-.4-1.3-1-2.8-1.8-4.4-2.6-5-6.5-7.7-11.1-7.7-.3 0-.6 0-1 .1-.1-.2-.3-.3-.4-.5-2-2.2-4.6-3.2-7.7-3.1-6 .2-12 4.5-16.8 12.2-3.4 5.4-6 12.2-6.7 17.5-6.9 2.1-11.7 3.6-11.8 3.7-3.5 1.1-3.6 1.2-4 4.5-.6 2.5-9.7 73-9.7 73l75.6 13.1V14.6c-.4.1-.7.1-.9.2zm-17.5 5.4c-4 1.2-8.4 2.6-12.7 3.9 1.2-4.7 3.6-9.4 6.4-12.5 1.1-1.1 2.6-2.4 4.3-3.2 1.7 3.6 2.1 8.5 2 11.8zM49.1 4.3c1.4 0 2.6.3 3.6.9-1.6.8-3.2 2.1-4.7 3.6-3.8 4.1-6.7 10.5-7.9 16.6-3.6 1.1-7.2 2.2-10.5 3.2 2.1-9.5 10.2-24 19.5-24.3zm-11.7 55c.4 6.4 17.3 7.8 18.3 22.9.7 11.9-6.3 20-16.4 20.6-12.2.8-18.9-6.4-18.9-6.4l2.6-11s6.7 5.1 12.1 4.7c3.5-.2 4.8-3.1 4.7-5.1-.5-8.4-14.3-7.9-15.2-21.7-.8-11.5 6.8-23.2 23.6-24.3 6.5-.4 9.8 1.2 9.8 1.2l-3.8 14.4s-4.3-2-9.4-1.6c-7.4.5-7.5 5.2-7.4 6.3zM61.2 19c0-3-.4-7.3-1.8-10.9 4.6.9 6.8 6 7.8 9.1-1.8.5-3.8 1.1-6 1.8zM78.1 123.9l31.4-7.8S96 24.8 95.9 24.2c-.1-.6-.6-1-1.1-1-.5 0-9.3-.2-9.3-.2s-5.4-5.2-7.4-7.2v108.1z" />
    </Svg>
  )
}

/* --- Documentation --------------------------------------------------------------------------- */

export const getDocumentationProps = PropSchema.introspect()

/* --- Exports --------------------------------------------------------------------------------- */

export default ShopifyIcon
