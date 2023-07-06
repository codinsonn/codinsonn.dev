import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MultipleFiles2Filled/> ----------------------------------------------------------------- */

export const MultipleFiles2Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M6 6H3c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-3H7c-.55 0-1-.45-1-1V6Z"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M18 18H7c-.55 0-1-.45-1-1V6"
    />
    <Path fill={fill} d="M17 2v5h5v10c0 .55-.45 1-1 1H7c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h10Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M18 14h-8M10 10h8M10 6h3"
    />
    <Path stroke={stroke} strokeLinejoin="round" strokeMiterlimit={10} d="M17 2v5h5" />
    <Path
      fill={fill}
      d="M17 2v5h5v-.59c0-.26-.11-.52-.29-.7l-3.42-3.42c-.18-.18-.44-.29-.7-.29H17Z"
    />
  </Svg>
)
