import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ScooterFilled/> ------------------------------------------------------------------------ */

export const ScooterFilled = ({
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
      d="M9.826 8a2 2 0 0 0-1.991 1.819l-.637 7A2 2 0 0 0 9.19 19H10v-3a2 2 0 0 1 4 0v3h.81a2 2 0 0 0 1.992-2.181l-.637-7A2 2 0 0 0 14.174 8H9.826Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M5 5a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H6a1 1 0 0 1-1-1ZM14 5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M17 5a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4h-2a2 2 0 0 1-2-2ZM1 5a2 2 0 0 1 2-2h2a2 2 0 1 1 0 4H3a2 2 0 0 1-2-2Z"
      clipRule="evenodd"
    />
    <Circle cx={12} cy={5} r={3} stroke={stroke} />
    <Path stroke={stroke} d="M10 16a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0v-4Z" />
    <Circle cx={12} cy={5} r={3} fill={fill} />
    <Path fill={fill} d="M10 16a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0v-4Z" />
  </Svg>
)

