import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <CardSuccessThin/> ---------------------------------------------------------------------- */

export const CardSuccessThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M21.9 16.01c.07-.16.1-.33.1-.51V8H2v7.5c0 .83.67 1.5 1.5 1.5H12a5 5 0 0 1 9.9-.99ZM22 8H2V4.5C2 3.67 2.67 3 3.5 3h17c.83 0 1.5.67 1.5 1.5V8Z"
      clipRule="evenodd"
    />
    <Path stroke={fill} strokeLinecap="round" strokeMiterlimit={10} d="M22 7H2v1h20V7Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <Path stroke={fill} strokeMiterlimit={10} d="m14.6 16.35 1.8 1.8 3-3" />
  </Svg>
)
