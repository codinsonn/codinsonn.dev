import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Image2Filled/> ------------------------------------------------------------------------- */

export const Image2Filled = ({
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
      fillRule="evenodd"
      d="M20 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="m22 15-5-6-6 8-5-4-4 3v2c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2v-3Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m22 15-5-6-6 8-5-4-4 3"
    />
    <Path fill={fill} d="M7 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </Svg>
)

