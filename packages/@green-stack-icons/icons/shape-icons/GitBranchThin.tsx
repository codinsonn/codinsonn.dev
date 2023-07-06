import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <GitBranchThin/> ------------------------------------------------------------------------ */

export const GitBranchThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path stroke={fill} strokeLinecap="round" d="M6 16V8" />
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="M9 19c3.5.5 8.5-2.5 9-6" />
    <Circle r={3} stroke={fill} strokeLinejoin="round" transform="matrix(1 0 0 -1 6 19)" />
    <Circle r={3} stroke={fill} strokeLinejoin="round" transform="matrix(1 0 0 -1 6 5)" />
    <Circle r={3} stroke={fill} strokeLinejoin="round" transform="matrix(1 0 0 -1 18 10)" />
  </Svg>
)
