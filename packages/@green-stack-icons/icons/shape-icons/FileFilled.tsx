import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <FileFilled/> --------------------------------------------------------------------------- */

export const FileFilled = ({
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
    <Path fill={fill} d="m16 2 5 5v15H3V2h13Z" />
    <Path stroke={stroke} strokeMiterlimit={10} d="M21 8h-6V2" />
    <Path fill={fill} d="M21 8h-6V2h1l5 5v1Z" />
  </Svg>
)

