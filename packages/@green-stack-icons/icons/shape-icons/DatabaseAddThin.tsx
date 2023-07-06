import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <DatabaseAddThin/> ---------------------------------------------------------------------- */

export const DatabaseAddThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 9c0 1.66 4.48 3 10 3s10-1.34 10-3V4.5C22 5.88 17.52 7 12 7S2 5.88 2 4.5V9Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 7c5.523 0 10-1.12 10-2.5S17.523 2 12 2 2 3.12 2 4.5 6.477 7 12 7Z"
    />
    <Path d="M22 17V9c0 1.66-4.48 3-10 3S2 10.66 2 9v5c0 1.66 4.48 3 10 3a5.002 5.002 0 0 0 0 0" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M22 17V9c0 1.66-4.48 3-10 3S2 10.66 2 9v5c0 1.66 4.48 3 10 3 0-2.76 2.24-5 5-5s5 2.24 5 5Zm0 0c0-2.76-2.24-5-5-5s-5 2.24-5 5"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M15.57 21.79h-.02A5.008 5.008 0 0 1 12 17c-5.52 0-10-1.34-10-3v5c0 1.66 4.48 3 10 3 1.26 0 2.44-.07 3.55-.21h.02Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <Path stroke={fill} strokeLinejoin="round" strokeMiterlimit={10} d="M17 14v6M20 17h-6" />
  </Svg>
)
