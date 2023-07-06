import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Users2Thin/> --------------------------------------------------------------------------- */

export const Users2Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 19c0-1.84-1-3.46-2.49-4.33A6.94 6.94 0 0 1 15 12c3.87 0 7 3.13 7 7H12Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M15 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM7 14c-2.76 0-5 2.24-5 5h10c0-2.76-2.24-5-5-5ZM7 14a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
  </Svg>
)
