import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <HighlighterThin/> ---------------------------------------------------------------------- */

export const HighlighterThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9 14v8l6-3v-5H9ZM7 9v3c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V9H7Z"
    />
    <Path d="M19 2v6c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V2" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M19 2v6c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V2"
    />
  </Svg>
)
