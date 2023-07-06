import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <FastFoodThin/> ------------------------------------------------------------------------- */

export const FastFoodThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16 16h4.2H16ZM17 22h2l2.2-11M16 7V2h3M21.2 11l.8-4H10l1 4h10.2ZM8 13c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6ZM2 22h12"
    />
  </Svg>
)
