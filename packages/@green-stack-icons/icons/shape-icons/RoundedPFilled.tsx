import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <RoundedPFilled/> ----------------------------------------------------------------------- */

export const RoundedPFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10Z" />
    <Path fill={fill} d="M14 6.6H8.3v5.8H14c1.4 0 2.6-1.3 2.6-2.8v-.2c0-1.6-1.1-2.8-2.6-2.8Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M14 6.6H8.3v5.8H14c1.4 0 2.6-1.3 2.6-2.8v-.2c0-1.6-1.1-2.8-2.6-2.8ZM8.3 6.6v10.8"
    />
  </Svg>
)
