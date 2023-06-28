import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <LinkedinFilled/> ----------------------------------------------------------------------- */

export const LinkedinFilled = ({
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
      d="M19.34 22H4.66C3.19 22 2 20.81 2 19.34V4.66C2 3.19 3.19 2 4.66 2h14.67C20.81 2 22 3.19 22 4.66v14.67c0 1.48-1.19 2.67-2.66 2.67Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7 10v7M17 17v-4.56c0-.57.03-1.23-.24-1.75-.6-1.18-2.19-.58-3.04-.09-.88.5-1.68 1.14-2.44 1.8l-.28.25v-2.64V17"
    />
    <Path fill={fill} d="M7 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7 7a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
  </Svg>
)

