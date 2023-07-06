import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Plug4Filled/> -------------------------------------------------------------------------- */

export const Plug4Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12 18a1 1 0 0 1 1 1c0 1.108.892 2 2 2h5a1 1 0 1 1 0 2h-5c-2.212 0-4-1.788-4-4a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M9 18a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1h-4a1 1 0 0 1-1-1v-1ZM6 2.5C6 1.668 6.668 1 7.5 1S9 1.668 9 2.5v6c0 .832-.668 1.5-1.5 1.5S6 9.332 6 8.5v-6ZM15 2.5c0-.832.668-1.5 1.5-1.5s1.5.668 1.5 1.5v6c0 .832-.668 1.5-1.5 1.5S15 9.332 15 8.5v-6Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M14 18h-4c-2.76 0-5-2.24-5-5v-3h14v3c0 2.76-2.24 5-5 5Z" />
    <Path stroke={stroke} strokeLinejoin="round" d="M19 10H5" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M3 8a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8Z"
      clipRule="evenodd"
    />
  </Svg>
)
