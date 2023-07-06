import * as React from 'react'
import Svg, { Rect, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Mouse3Filled/> ------------------------------------------------------------------------- */

export const Mouse3Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Rect width={14} height={20} x={5} y={2} fill={fill} rx={7} />
    <Path fill={fill} d="M12 9h7a7 7 0 0 0-7-7v7ZM12 9H5a7 7 0 0 1 7-7v7Z" />
    <Path stroke={stroke} strokeLinejoin="round" d="M5 9h14M12 9V2" />
  </Svg>
)
