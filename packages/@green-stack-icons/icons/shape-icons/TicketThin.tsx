import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <TicketThin/> --------------------------------------------------------------------------- */

export const TicketThin = ({
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
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M19.89 18H4.11c0-1.44-.94-2.61-2.11-2.61V8.61c1.16 0 2.11-1.17 2.11-2.61H19.9c0 1.44.94 2.61 2.11 2.61v6.79c-1.17-.01-2.12 1.16-2.12 2.6Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M13 10H7v4h6v-4Z"
    />
    <Path stroke={fill} d="M17 6v1M17 8v1M17 10v1M17 12v1M17 14v1M17 16v1" />
  </Svg>
)

