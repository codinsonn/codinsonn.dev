import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Scooter3Thin/> ------------------------------------------------------------------------- */

export const Scooter3Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.956 5.513a3 3 0 0 1-5.912 0c-.66.855-1.14 2.552-1.21 3.306l-.636 7A2 2 0 0 0 9.19 18H10v-3a2 2 0 0 1 4 0v3h.81a2 2 0 0 0 1.992-2.181l-.637-7c-.068-.754-.55-2.451-1.209-3.306Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 15a2 2 0 1 1 4 0v5a2 2 0 1 1-4 0v-5Z"
    />
    <Circle cx={12} cy={5} r={3} stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 2h4v2h-4V2ZM2 2h4v2H2V2ZM9 5 6 3M15 5l3-2"
    />
  </Svg>
)
