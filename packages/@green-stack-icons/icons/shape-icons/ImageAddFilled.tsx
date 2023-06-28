import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ImageAddFilled/> ----------------------------------------------------------------------- */

export const ImageAddFilled = ({
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
      d="M22 14V5c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h10"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="m22 14-5-6-6 8-5-4-4 3v2c0 1.1.9 2 2 2h10"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m22 14-5-6-6 8-5-4-4 3"
    />
    <Path fill={fill} d="M7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7 8a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M23 20h-6v-2h6v2Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M19 22v-6h2v6h-2Z"
      clipRule="evenodd"
    />
  </Svg>
)

