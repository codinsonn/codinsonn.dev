import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ShoppingBagFilled/> -------------------------------------------------------------------- */

export const ShoppingBagFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M6 2 3 6v14c0 .53.21 1.04.59 1.41.38.37.88.59 1.41.59h14c.53 0 1.04-.21 1.41-.59.37-.38.59-.88.59-1.41V6l-3-4H6Z"
    />
    <Path
      fill={fill}
      d="M3 6v14c0 .53.21 1.04.59 1.41.38.37.88.59 1.41.59h14c.53 0 1.04-.21 1.41-.59.37-.38.59-.88.59-1.41V6H3Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3 6h18M16 10c0 1.06-.42 2.08-1.17 2.83a4.004 4.004 0 0 1-5.66 0A4.004 4.004 0 0 1 8 10"
    />
  </Svg>
)
