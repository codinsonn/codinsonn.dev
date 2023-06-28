import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <CartThin/> ----------------------------------------------------------------------------- */

export const CartThin = ({
  size = 24,
  fill = '#333333',
  ...svgProps
}: IconProps) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    {...svgProps}
  >
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M18 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM10 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <Path d="m22 4-2 11H8L6 4" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m22 4-2 11H8L6 4M2 4h4M11 11h6M10 7h8"
    />
  </Svg>
)

