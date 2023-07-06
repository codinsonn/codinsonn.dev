import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <HorizontalPanoramaThin/> --------------------------------------------------------------- */

export const HorizontalPanoramaThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M2 20V4c2.47.99 6.03 1.63 10 1.63 3.97 0 7.53-.64 10-1.63v16c-2.47-.99-6.03-1.63-10-1.63-3.97 0-7.53.64-10 1.63Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 12h14M7 14l-2-2 2-2M17 14l2-2-2-2"
    />
  </Svg>
)
