import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <FolderSuccessFilled/> ------------------------------------------------------------------ */

export const FolderSuccessFilled = ({
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
      d="M22 17c0-2.76-2.24-5-5-5a5.002 5.002 0 0 0-4.9 6H2V2h8l2 3h10v12Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <Path fill={fill} d="M17 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    <Path stroke={stroke} strokeMiterlimit={10} d="m14.6 16.35 1.8 1.8 3-3" />
  </Svg>
)

