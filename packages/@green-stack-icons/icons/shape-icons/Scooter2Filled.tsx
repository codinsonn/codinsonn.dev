import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Scooter2Filled/> ----------------------------------------------------------------------- */

export const Scooter2Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M8 10.819C8.094 9.789 8.792 9 9.826 9h4.348c1.034 0 1.732.789 1.826 1.819v6C16 18 15.986 19 14.81 19H14v-1a2 2 0 1 0-4 0v1h-.81C8.014 19 8 18 8 16.819v-6Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 18a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2Z"
    />
    <Path
      fill={fill}
      d="M14.236 7a3 3 0 0 0 .64-2.854L19.001 5v2h-4.764ZM9.764 7H5V5l4.123-.854A3 3 0 0 0 9.763 7Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M18 6a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1ZM1 6a1 1 0 0 1 1-1h3a1 1 0 0 1 0 2H2a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M11 7.83V9h2V7.83a2.995 2.995 0 0 1-2 0Z" />
    <Circle cx={12} cy={5} r={3} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    <Path fill={fill} d="M10 18a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2Z" />
    <Circle cx={12} cy={5} r={3} fill={fill} />
  </Svg>
)
