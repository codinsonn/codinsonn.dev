import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Users3Filled/> ------------------------------------------------------------------------- */

export const Users3Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    {...svgProps}
  >
    <Path
      fill={fill}
      d="M16.67 14.23A5.987 5.987 0 0 1 18 18h4a3.999 3.999 0 0 0-5.33-3.77Z"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M16.67 14.23A5.987 5.987 0 0 1 18 18"
    />
    <Path
      fill={fill}
      d="M18 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM7.33 14.23A3.999 3.999 0 0 0 2 18h4c0-1.43.5-2.74 1.33-3.77Z"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M6 18c0-1.43.5-2.74 1.33-3.77"
    />
    <Path fill={fill} d="M6 14a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <Path
      fill={fill}
      d="M12 12c-3.31 0-6 2.69-6 6h12c0-3.31-2.69-6-6-6ZM12 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </Svg>
)

