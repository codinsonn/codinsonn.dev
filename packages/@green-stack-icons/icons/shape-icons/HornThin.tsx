import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <HornThin/> ----------------------------------------------------------------------------- */

export const HornThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 15H7v6h1v-6ZM19 8v6c1.66 0 3-1.34 3-3s-1.34-3-3-3ZM19 19 9 14V8l10-5v16ZM9 15H6c-2.21 0-4-1.79-4-4s1.79-4 4-4h3v8Z"
    />
  </Svg>
)
