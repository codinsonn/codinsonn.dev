import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <AirplayThin/> -------------------------------------------------------------------------- */

export const AirplayThin = ({
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
      d="M17.53 20.33h.01C20.22 18.53 22 15.48 22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 3.48 1.78 6.53 4.46 8.33h.01"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.2 17.66a6.5 6.5 0 1 0-6.4 0"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.78 14.89C14.06 14.55 15 13.39 15 12c0-1.66-1.34-3-3-3s-3 1.34-3 3c0 1.39.94 2.55 2.22 2.89"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 22h14l-7-8-7 8Z"
    />
  </Svg>
)

