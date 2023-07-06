import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ColumnFilled/> ------------------------------------------------------------------------- */

export const ColumnFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} d="M20 22V2h-8v20h8ZM12 22V2H4v20h8Z" />
    <Path stroke={stroke} strokeLinejoin="round" strokeMiterlimit={10} d="M12 22V2" />
  </Svg>
)
