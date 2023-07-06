import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <UserTickThin/> ------------------------------------------------------------------------- */

export const UserTickThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m16 10.6 2.25 2.4L22 9"
    />
    <Circle cx={10} cy={7} r={4} stroke={fill} strokeLinejoin="round" />
    <Path d="M13 15H7a5 5 0 0 0-5 5v1h16v-1a5 5 0 0 0-5-5Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 21v-1a5 5 0 0 0-5-5H7a5 5 0 0 0-5 5v1"
    />
  </Svg>
)
