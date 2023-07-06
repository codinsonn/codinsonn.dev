import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Scooter2Thin/> ------------------------------------------------------------------------- */

export const Scooter2Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 10.819C8.094 9.789 8.792 9 9.826 9h4.348c1.034 0 1.732.789 1.826 1.819v6C16 18 15.986 19 14.81 19H14v-1a2 2 0 1 0-4 0v1h-.81C8.014 19 8 18 8 16.819v-6Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 18a2 2 0 1 1 4 0v2a2 2 0 1 1-4 0v-2Z"
    />
    <Circle cx={12} cy={5} r={3} stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.236 7a3 3 0 0 0 .64-2.854L19.001 5v2h-4.764ZM9.764 7H5V5l4.123-.854A3 3 0 0 0 9.763 7ZM19 6h3M5 6H2M11 7.83V9h2V7.83a2.995 2.995 0 0 1-2 0Z"
    />
  </Svg>
)
