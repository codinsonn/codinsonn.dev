import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <CalendarSuccessThin/> ------------------------------------------------------------------ */

export const CalendarSuccessThin = ({
  size = 24,
  fill = '#333333',
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
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M20 13c-.83-.63-1.87-1-3-1-2.76 0-5 2.24-5 5 0 1.13.37 2.17 1 3H4c-1.1 0-2-.9-2-2V9h18v4ZM18 4H4c-1.1 0-2 .9-2 2v3h18V6c0-1.1-.9-2-2-2Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M15 2v4M7 2v4"
    />
    <Path
      stroke={fill}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M4 13h2M8 13h2M12 13h2M4 17h2M8 17h2"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <Path stroke={fill} strokeMiterlimit={10} d="m14.6 16.35 1.8 1.8 3-3" />
  </Svg>
)

