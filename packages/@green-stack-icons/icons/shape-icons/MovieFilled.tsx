import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <MovieFilled/> -------------------------------------------------------------------------- */

export const MovieFilled = ({
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
      d="M21 22H3c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v18c0 .55-.45 1-1 1Z"
    />
    <Path fill={fill} d="M22 6H2v12h20V6Z" />
    <Path fill={fill} d="m15 12-5-3v6l5-3Z" />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M6 18v4M10 18v4M14 18v4M18 18v4"
    />
    <Path stroke={stroke} strokeMiterlimit={10} d="M22 18H2M2 6h20" />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M6 2v4M10 2v4M14 2v4M18 2v4"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m15 12-5-3v6l5-3Z"
    />
  </Svg>
)

