import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <CalendarFilled/> ----------------------------------------------------------------------- */

export const CalendarFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M20 22H4c-1.1 0-2-.9-2-2V10h20v10c0 1.1-.9 2-2 2ZM22 10V6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v4h20Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M16 3v3M8 3v3"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M5 14h2M9 14h2M13 14h2M17 14h2M5 18h2M9 18h2M13 18h2M17 18h2"
    />
    <Path stroke={stroke} strokeMiterlimit={10} d="M22 10H2" />
  </Svg>
)
