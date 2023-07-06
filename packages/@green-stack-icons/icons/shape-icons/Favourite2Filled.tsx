import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Favourite2Filled/> --------------------------------------------------------------------- */

export const Favourite2Filled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M17 3c-2.88 0-5 3-5 3s-1.92-3-5-3C4.1 3 2 5 2 8s1 5 4 8c2 2 6 5 6 5s4-3 6-5c3-3 4-5 4-8s-2.1-5-5-5Z"
    />
  </Svg>
)
