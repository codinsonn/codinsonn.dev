import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ChatFavouriteThin/> -------------------------------------------------------------------- */

export const ChatFavouriteThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M2 3v13c0 .55.45 1 1 1h3v5l6-5h9c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1Z"
    />
    <Path
      stroke={fill}
      d="M14.5 5.5c-1.44 0-2.5 1.333-2.5 1.333S11.04 5.5 9.5 5.5C8.05 5.5 7 6.452 7 7.786c0 1.333.5 2.158 2 3.492 1 .889 3 2.222 3 2.222s2-1.333 3-2.222c1.5-1.334 2-2.159 2-3.492C17 6.452 15.95 5.5 14.5 5.5Z"
    />
  </Svg>
)
