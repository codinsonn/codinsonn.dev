import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <UserScanThin/> ------------------------------------------------------------------------- */

export const UserScanThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M6 2H3a1 1 0 0 0-1 1v3M18 22h3a1 1 0 0 0 1-1v-3M22 6V3a1 1 0 0 0-1-1h-3M2 18v3a1 1 0 0 0 1 1h3M17 17.926V17a5 5 0 0 0-10 0v.926c0 .04.033.074.074.074h9.852c.04 0 .074-.033.074-.074Z"
    />
    <Circle cx={12} cy={9} r={3} stroke={fill} strokeLinecap="round" />
  </Svg>
)
