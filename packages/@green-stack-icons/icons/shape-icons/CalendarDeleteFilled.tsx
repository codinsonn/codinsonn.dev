import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <CalendarDeleteFilled/> ----------------------------------------------------------------- */

export const CalendarDeleteFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M20 13c-.83-.63-1.87-1-3-1-2.76 0-5 2.24-5 5 0 1.13.37 2.17 1 3H4c-1.1 0-2-.9-2-2V9h18v4ZM20 9V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v3h18Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M15 3v3M7 3v3"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M4 13h2M8 13h2M12 13h2M4 17h2M8 17h2"
    />
    <Path fill={fill} d="M17 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    <Path stroke={stroke} strokeLinejoin="round" strokeMiterlimit={10} d="M20 9H2" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m14.88 14.88 4.24 4.24M19.12 14.88l-4.24 4.24"
    />
  </Svg>
)
