import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <PrintThin/> ---------------------------------------------------------------------------- */

export const PrintThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M19 7H5V3c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v4ZM17 22H7c-.55 0-1-.45-1-1v-7h12v7c0 .55-.45 1-1 1Z"
      clipRule="evenodd"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M18 17v-3H6v3H3c-.55 0-1-.45-1-1V8c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v8c0 .55-.45 1-1 1h-3Z"
      clipRule="evenodd"
    />
    <Path stroke={fill} strokeMiterlimit={10} d="M4 10h3" />
  </Svg>
)
