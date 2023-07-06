import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ServerSuccessFilled/> ------------------------------------------------------------------ */

export const ServerSuccessFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M17 21a5.002 5.002 0 0 1-4.9-6H4c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h13ZM20 9H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2ZM21.641 14.136A5.002 5.002 0 0 0 12.1 15H4c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v2c0 .42-.132.814-.359 1.136Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <Path fill={fill} d="M17 21a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    <Path stroke={stroke} strokeMiterlimit={10} d="m14.6 15.35 1.8 1.8 3-3" />
    <Path stroke={stroke} strokeLinejoin="round" d="M5 5v2M8 5v2M5 11v2M8 11v2M5 17v2M8 17v2" />
  </Svg>
)
