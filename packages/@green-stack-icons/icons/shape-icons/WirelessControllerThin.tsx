import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <WirelessControllerThin/> --------------------------------------------------------------- */

export const WirelessControllerThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.55 13.67C21.37 11.04 19.199 9 16.577 9H7.433C4.81 9 2.64 11.04 2.46 13.67L2 19.56v.14C2 20.96 3.01 22 4.261 22c.8 0 1.53-.42 1.951-1.11l1.51-2.08c.391-.51.981-.81 1.612-.81h5.342c.63 0 1.231.3 1.601.81l1.51 2.08c.421.69 1.162 1.11 1.952 1.11C20.989 22 22 20.96 22 19.7v-.14l-.45-5.89Z"
    />
    <Path stroke={fill} strokeLinejoin="round" d="M11 13.5H6M8.5 16v-5" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M15 12h.01M17 15h.01"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.5 6c-.97-.63-2.19-1-3.5-1s-2.53.37-3.5 1M18 4c-1.6-1.24-3.7-2-6-2s-4.4.76-6 2"
    />
  </Svg>
)
