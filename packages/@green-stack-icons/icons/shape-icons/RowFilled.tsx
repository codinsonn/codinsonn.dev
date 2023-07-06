import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <RowFilled/> ---------------------------------------------------------------------------- */

export const RowFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} d="M22 4H2v8h20V4ZM22 12H2v8h20v-8Z" />
    <Path stroke={stroke} strokeLinejoin="round" strokeMiterlimit={10} d="M22 12H2" />
  </Svg>
)
