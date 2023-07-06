import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <BurgerFilled/> ------------------------------------------------------------------------- */

export const BurgerFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M2 13a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="M3 15c0 1.11.25 2.16.71 3.13C5.07 21.01 8.27 21 12 21c3.73 0 6.93.01 8.29-2.87.46-.97.71-2.02.71-3.13H3ZM21 11c0-4.42-4.03-8-9-8s-9 3.58-9 8h18Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M15.99 8h.02M11.99 6h.02M8 8h.01"
    />
  </Svg>
)
