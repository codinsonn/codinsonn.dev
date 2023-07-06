import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Scooter5Thin/> ------------------------------------------------------------------------- */

export const Scooter5Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 18a2 2 0 1 0-4 0H2s.5-1.5 1-2 1-.5 1-.5L3 11l-1-1h7l2 7v1H8ZM11 18h3l2.5-6L14 5h-2"
    />
    <Circle cx={6} cy={18} r={2} stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <Circle cx={20} cy={18} r={2} stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 18a4 4 0 0 1 6-3.465M15 5a1 1 0 0 1 1-1h1v2h-1a1 1 0 0 1-1-1Z"
    />
    <Path stroke={fill} strokeLinecap="round" d="M3.5 13h6.3" />
  </Svg>
)
