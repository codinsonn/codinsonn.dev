import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <TeslaFilled/> -------------------------------------------------------------------------- */

export const TeslaFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} d="M7 5h10l5 6.5V19h-3l-1-2H6l-1 2H2v-7.5L7 5Z" />
    <Path fill={fill} d="M17 15H7l-1 2h12l-1-2Z" />
    <Path stroke={stroke} strokeLinecap="round" strokeLinejoin="round" d="M2 9h2l2 3h12l2-3h2" />
  </Svg>
)
