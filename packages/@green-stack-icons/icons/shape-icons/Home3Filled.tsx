import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Home3Filled/> -------------------------------------------------------------------------- */

export const Home3Filled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} d="M20 8.4 12 2 4 8.4V22h16V8.4Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M11.38 2.215a1 1 0 0 1 1.24 0l9.5 7.5a1 1 0 1 1-1.24 1.57L12 4.275l-8.88 7.01a1 1 0 0 1-1.24-1.57l9.5-7.5Z"
      clipRule="evenodd"
    />
  </Svg>
)
