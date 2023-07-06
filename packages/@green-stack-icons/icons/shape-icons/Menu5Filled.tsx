import * as React from 'react'
import Svg, { Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Menu5Filled/> -------------------------------------------------------------------------- */

export const Menu5Filled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Circle cx={6} cy={6} r={2} fill={fill} />
    <Circle cx={6} cy={18} r={2} fill={fill} />
    <Circle cx={18} cy={6} r={2} fill={fill} />
    <Circle cx={18} cy={18} r={2} fill={fill} />
  </Svg>
)
