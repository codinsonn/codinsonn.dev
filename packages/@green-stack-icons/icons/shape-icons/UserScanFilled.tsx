import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <UserScanFilled/> ----------------------------------------------------------------------- */

export const UserScanFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M3 8a1 1 0 0 1-1-1V4a2 2 0 0 1 2-2h3a1 1 0 1 1 0 2H4v3a1 1 0 0 1-1 1ZM21 16a1 1 0 0 1 1 1v3a2 2 0 0 1-2 2h-3a1 1 0 1 1 0-2h3v-3a1 1 0 0 1 1-1ZM17 3a1 1 0 0 1 1-1h3a2 2 0 0 1 2 2v3a1 1 0 1 1-2 0V4h-3a1 1 0 0 1-1-1ZM8 21a1 1 0 0 1-1 1H4a2 2 0 0 1-2-2v-3a1 1 0 1 1 2 0v3h3a1 1 0 0 1 1 1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="M17 17.926V17a5 5 0 0 0-10 0v.926c0 .04.033.074.074.074h9.852c.04 0 .074-.033.074-.074Z"
    />
    <Circle cx={12} cy={9} r={3} fill={fill} />
  </Svg>
)
