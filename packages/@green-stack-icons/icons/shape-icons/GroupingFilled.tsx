import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <GroupingFilled/> ----------------------------------------------------------------------- */

export const GroupingFilled = ({
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
    <Path fill={fill} d="M14 5H5v9h9V5Z" />
    <Path stroke={stroke} d="M14 10h-4v4" />
    <Path fill={fill} d="M19 10h-9v9h9v-9Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M19 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM1 3a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM1 21a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM19 21a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="M21 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM3 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM21 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </Svg>
)

