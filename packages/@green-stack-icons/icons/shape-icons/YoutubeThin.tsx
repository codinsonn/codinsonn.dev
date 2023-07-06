import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <YoutubeThin/> -------------------------------------------------------------------------- */

export const YoutubeThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M19.57 20H4.43C3.09 20 2 18.87 2 17.46V6.53C2 5.13 3.09 4 4.43 4h15.15C20.91 4 22 5.13 22 6.53v10.93c0 1.41-1.09 2.54-2.43 2.54Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9 8v8l7-4.44L9 8Z"
    />
  </Svg>
)
