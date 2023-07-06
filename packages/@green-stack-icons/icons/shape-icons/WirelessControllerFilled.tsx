import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <WirelessControllerFilled/> ------------------------------------------------------------- */

export const WirelessControllerFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M21.55 13.67C21.37 11.04 19.199 9 16.577 9H7.433C4.81 9 2.64 11.04 2.46 13.67L2 19.56v.14C2 20.96 3.01 22 4.261 22c.8 0 1.53-.42 1.951-1.11l1.51-2.08c.391-.51.981-.81 1.612-.81h5.342c.63 0 1.231.3 1.601.81l1.51 2.08c.421.69 1.162 1.11 1.952 1.11C20.989 22 22 20.96 22 19.7v-.14l-.45-5.89Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M7.955 6.161C9.094 5.421 10.505 5 12 5c1.496 0 2.906.422 4.045 1.161a1 1 0 0 1-1.09 1.678C14.154 7.319 13.125 7 12 7c-1.124 0-2.154.318-2.955.839a1 1 0 0 1-1.09-1.678Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M5.387 4.21C7.164 2.833 9.48 2 12 2c2.52 0 4.836.833 6.613 2.21a1 1 0 0 1-1.226 1.58C15.964 4.687 14.08 4 12 4c-2.08 0-3.964.687-5.387 1.79a1 1 0 1 1-1.226-1.58Z"
      clipRule="evenodd"
    />
    <Path stroke={stroke} strokeLinejoin="round" d="M11 13.5H6M8.5 16v-5" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M15 12h.01M17 15h.01"
    />
  </Svg>
)
