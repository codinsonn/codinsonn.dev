import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <SquareChat4Filled/> -------------------------------------------------------------------- */

export const SquareChat4Filled = ({
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
      d="M7 7c0-.55.45-1 1-1h9V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h4V7Z"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 6H8c-.55 0-1 .45-1 1v6"
    />
    <Path
      fill={fill}
      d="M7 7v9c0 .55.45 1 1 1h10l4 4V7c0-.55-.45-1-1-1H8c-.55 0-1 .45-1 1Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M13 10h5M11 13h7"
    />
  </Svg>
)

