import * as React from 'react'
import Svg, { Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Menu5Thin/> ---------------------------------------------------------------------------- */

export const Menu5Thin = ({
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
    <Circle cx={4} cy={4} r={2} stroke={fill} />
    <Circle cx={4} cy={20} r={2} stroke={fill} />
    <Circle cx={20} cy={4} r={2} stroke={fill} />
    <Circle cx={20} cy={20} r={2} stroke={fill} />
  </Svg>
)

