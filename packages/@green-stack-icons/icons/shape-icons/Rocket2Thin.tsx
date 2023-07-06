import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Rocket2Thin/> -------------------------------------------------------------------------- */

export const Rocket2Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M14.51 17.36c-5.55 2.03-5.55 2.03-7.73-.15-2.17-2.17-2.17-2.17-.15-7.73 2.19-2.19 5.82-4.75 9-6.23 2.58-1.21 4.87-1.71 5.85-.74 2.18 2.18-2.99 10.87-6.97 14.85Z"
    />
    <Path d="M2 17.12c1.3-1.3 3.44-1.26 4.79.09s1.39 3.49.09 4.79" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M2 17.12c1.3-1.3 3.44-1.26 4.79.09s1.39 3.49.09 4.79M2 22l1.87-1.87M14.14 12.47c-.72.72-1.89.72-2.61 0s-.72-1.89 0-2.61 1.89-.72 2.61 0 .72 1.89 0 2.61Z"
    />
  </Svg>
)
