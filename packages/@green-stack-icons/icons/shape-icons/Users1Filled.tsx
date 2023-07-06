import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Users1Filled/> ------------------------------------------------------------------------- */

export const Users1Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M9.49 14.69C8.76 14.26 7.91 14 7 14c-2.76 0-5 2.24-5 5h6c0-1.63.56-3.12 1.49-4.31Z"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M8 19c0-1.63.56-3.12 1.49-4.31"
    />
    <Path
      fill={fill}
      d="M7 14a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM15 12c-3.87 0-7 3.13-7 7h14c0-3.87-3.13-7-7-7ZM15 12a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
  </Svg>
)
