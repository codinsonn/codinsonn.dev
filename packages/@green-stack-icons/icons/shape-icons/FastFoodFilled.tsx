import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <FastFoodFilled/> ----------------------------------------------------------------------- */

export const FastFoodFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M14 16a1 1 0 0 1 1-1h4.2a1 1 0 1 1 0 2H15a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M20.396 10.02a1 1 0 0 1 .785 1.176l-2.2 11A1 1 0 0 1 18 23h-2a1 1 0 1 1 0-2h1.18l2.04-10.196a1 1 0 0 1 1.176-.785ZM15 3a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-2v4a1 1 0 1 1-2 0V3Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="m21.2 11 .8-4H10l1 4h10.2ZM8 14c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M2 22a1 1 0 0 1 1-1h10a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)
