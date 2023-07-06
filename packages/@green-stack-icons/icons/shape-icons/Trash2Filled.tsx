import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Trash2Filled/> ------------------------------------------------------------------------- */

export const Trash2Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M16.13 22H7.87c-.5 0-.92-.37-.99-.86L5 8h14l-1.88 13.14c-.07.49-.49.86-.99.86Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M3 8a1 1 0 0 1 1-1h16a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M10 12v6M14 12v6"
    />
    <Path fill={fill} d="M16 5H8l1.7-2.55c.19-.28.5-.45.84-.45h2.93c.33 0 .65.17.83.45L16 5Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M2.5 5a1 1 0 0 1 1-1h17a1 1 0 1 1 0 2h-17a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)
