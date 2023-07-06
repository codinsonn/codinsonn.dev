import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Download3Filled/> ---------------------------------------------------------------------- */

export const Download3Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Circle cx={12} cy={12} r={10} fill={fill} />
    <Path stroke={stroke} d="M12 6v8M8 10l4 4 4-4M7 17h10" />
  </Svg>
)
