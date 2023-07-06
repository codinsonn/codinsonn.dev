import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Pen2Filled/> --------------------------------------------------------------------------- */

export const Pen2Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} d="m19.23 8.31-3.54-3.54L3.77 16.7 2 22l5.3-1.77L19.23 8.31Z" />
    <Path
      fill={fill}
      d="m19.23 8.31-3.54-3.54 2.47-2.47a.996.996 0 0 1 1.41 0l2.13 2.13c.39.39.39 1.02 0 1.41l-2.47 2.47Z"
    />
    <Path stroke={stroke} strokeLinejoin="round" strokeMiterlimit={10} d="m19.23 8.31-3.54-3.54" />
  </Svg>
)
