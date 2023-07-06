import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Rounded9Filled/> ----------------------------------------------------------------------- */

export const Rounded9Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Z" />
    <Path
      fill={fill}
      d="M8.6 9.9v-.05A3.374 3.374 0 0 1 12 6.5c1.88 0 3.37 1.47 3.4 3.35V9.8c0 1.9-1.5 3.4-3.4 3.4s-3.4-1.5-3.4-3.4"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M15.4 9.8v.05M9.8 16.7c.6.5 1.3.8 2.2.8 1.9 0 3.4-1.5 3.4-3.4V9.8"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M8.6 9.9v-.05A3.374 3.374 0 0 1 12 6.5c1.88 0 3.37 1.47 3.4 3.35V9.8c0 1.9-1.5 3.4-3.4 3.4s-3.4-1.5-3.4-3.4"
    />
  </Svg>
)
