import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Scooter3Filled/> ----------------------------------------------------------------------- */

export const Scooter3Filled = ({
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
      d="M14.956 5.513a3 3 0 0 1-5.912 0c-.66.855-1.14 2.552-1.21 3.306l-.636 7A2 2 0 0 0 9.19 18H10v-3a2 2 0 0 1 4 0v3h.81a2 2 0 0 0 1.992-2.181l-.637-7c-.068-.754-.55-2.451-1.209-3.306Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 15a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M5.168 2.445a1 1 0 0 1 1.387-.277l3 2a1 1 0 0 1-1.11 1.664l-3-2a1 1 0 0 1-.277-1.387ZM18.832 2.445a1 1 0 0 1-.277 1.387l-3 2a1 1 0 1 1-1.11-1.664l3-2a1 1 0 0 1 1.387.277Z"
      clipRule="evenodd"
    />
    <Circle
      cx={12}
      cy={5}
      r={3}
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M17 2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1V2ZM1 2a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M10 15a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5Z" />
    <Circle cx={12} cy={5} r={3} fill={fill} />
  </Svg>
)

