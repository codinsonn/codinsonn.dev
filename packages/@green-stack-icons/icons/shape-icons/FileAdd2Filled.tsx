import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <FileAdd2Filled/> ----------------------------------------------------------------------- */

export const FileAdd2Filled = ({
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
    <Path fill={fill} d="M21 14V7l-5-5H3v20h10v-5h3v-3h5Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M17 20v3h2v-3h3v-2h-3v-3h-2v3h-3v2h3Z"
      clipRule="evenodd"
    />
    <Path stroke={stroke} strokeMiterlimit={10} d="M21 8h-6V2" />
    <Path fill={fill} d="M21 8h-6V2h1l5 5v1Z" />
  </Svg>
)

