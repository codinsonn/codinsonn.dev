import * as React from 'react'
import Svg, { Path, Rect, Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ScooterThin/> -------------------------------------------------------------------------- */

export const ScooterThin = ({
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
    <Path
      stroke={fill}
      d="M9.826 8a2 2 0 0 0-1.991 1.819l-.637 7A2 2 0 0 0 9.19 19H10v-3a2 2 0 0 1 4 0v3h.81a2 2 0 0 0 1.992-2.181l-.637-7A2 2 0 0 0 14.174 8H9.826Z"
    />
    <Path stroke={fill} d="M10 16a2 2 0 1 1 4 0v4a2 2 0 1 1-4 0v-4Z" />
    <Rect width={4} height={2} x={18} y={4} stroke={fill} rx={1} />
    <Rect width={4} height={2} x={2} y={4} stroke={fill} rx={1} />
    <Path stroke={fill} d="M6 5h3M15 5h3" />
    <Circle cx={12} cy={5} r={3} stroke={fill} />
  </Svg>
)

