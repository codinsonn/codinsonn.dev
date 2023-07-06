import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Controller1Filled/> -------------------------------------------------------------------- */

export const Controller1Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M17 17H7c-2.76 0-5-2.24-5-5s2.24-5 5-5h10c2.76 0 5 2.24 5 5s-2.24 5-5 5Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M15.495 13.5h.01M17.5 10.5h.01"
    />
    <Path fill={fill} d="M7 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M15.5 14a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM17.5 11a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM7 14v-4M5 12h4"
    />
  </Svg>
)
