import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <SendButtonFilled/> --------------------------------------------------------------------- */

export const SendButtonFilled = ({
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
    <Path fill={fill} d="M22 2 10.97 13.03 14.41 22 22 2Z" />
    <Path fill={fill} d="M22 2 2 9.59l8.97 3.44L22 2Z" />
  </Svg>
)

