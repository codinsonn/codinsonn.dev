import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Basket2Filled/> ------------------------------------------------------------------------ */

export const Basket2Filled = ({
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
      d="M17.31 22H6.69c-.98 0-1.81-.71-1.97-1.67L3 10h18l-1.72 10.33c-.16.96-1 1.67-1.97 1.67Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7 14h10M8 18h8"
    />
    <Path
      fill={fill}
      d="M13.5 10h-3V2.5c0-.28.22-.5.5-.5h2c.28 0 .5.22.5.5V10Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M1 10a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)

