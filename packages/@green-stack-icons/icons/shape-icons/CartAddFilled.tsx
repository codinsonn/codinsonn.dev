import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <CartAddFilled/> ------------------------------------------------------------------------ */

export const CartAddFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
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
      fill={fill}
      d="M17.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM10.5 20a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M2 5a1 1 0 0 1 1-1h4a1 1 0 0 1 0 2H3a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="m22 4-2 11H8L6 4" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M11 9h6M14 6v6"
    />
  </Svg>
)

