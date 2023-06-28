import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <UserCircleFilled/> --------------------------------------------------------------------- */

export const UserCircleFilled = ({
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <Path
      fill={fill}
      d="M19.33 18.79A8.002 8.002 0 0 0 12 14c-3.28 0-6.09 1.97-7.33 4.79C6.5 20.76 9.1 22 12 22c2.9 0 5.5-1.24 7.33-3.21Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M19.33 18.79A8.002 8.002 0 0 0 12 14c-3.28 0-6.09 1.97-7.33 4.79"
    />
    <Path fill={fill} d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <Path
      stroke={stroke}
      strokeLinecap="square"
      strokeMiterlimit={10}
      d="M12 14a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </Svg>
)

