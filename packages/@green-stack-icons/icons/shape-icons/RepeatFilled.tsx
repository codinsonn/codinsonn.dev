import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <RepeatFilled/> ------------------------------------------------------------------------- */

export const RepeatFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M5 10c-1.148 0-2 .852-2 2 0 1.148.852 2 2 2h1a1 1 0 1 1 0 2H5c-2.252 0-4-1.748-4-4s1.748-4 4-4h7a1 1 0 1 1 0 2H5Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M9 5.946v6.108L13.887 9 9 5.946ZM17 9a1 1 0 0 1 1-1h1c2.252 0 4 1.748 4 4s-1.748 4-4 4h-7a1 1 0 1 1 0-2h7c1.148 0 2-.852 2-2 0-1.148-.852-2-2-2h-1a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M15 18.054v-6.108L10.113 15 15 18.054Z"
      clipRule="evenodd"
    />
  </Svg>
)
