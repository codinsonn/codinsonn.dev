import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <NotificationTickFilled/> --------------------------------------------------------------- */

export const NotificationTickFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M12.58 5.22c.27-.34.42-.76.42-1.22 0-1.1-.9-2-2-2s-2 .9-2 2c0 .46.15.88.42 1.22M11.41 19H8.55A2.5 2.5 0 0 0 13 21a5.093 5.093 0 0 1-1.59-2H8.55h2.86Z"
    />
    <Path
      fill={fill}
      d="M17 12.1a5.002 5.002 0 0 0-6 4.9c0 .71.15 1.39.41 2H3l1.64-4.11c.24-.59.36-1.22.36-1.85V11c0-3.38 2.79-6.1 6.18-6 3.29.1 5.82 2.97 5.82 6.25v.85Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M16 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <Path fill={fill} d="M16 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    <Path stroke={stroke} strokeMiterlimit={10} d="m13.6 16.35 1.8 1.8 3-3" />
  </Svg>
)
