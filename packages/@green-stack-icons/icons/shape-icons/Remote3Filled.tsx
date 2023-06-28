import * as React from 'react'
import Svg, { Rect, Circle, Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Remote3Filled/> ------------------------------------------------------------------------ */

export const Remote3Filled = ({
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
    <Rect width={12} height={20} x={6} y={2} fill={fill} rx={2} />
    <Circle cx={12} cy={8} r={3} stroke={stroke} strokeLinejoin="round" />
    <Circle cx={12} cy={8} r={3} fill={fill} />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      d="M10 15v.001M14 15v.001M10 18.001v.001M14 18.001v.001"
    />
  </Svg>
)

