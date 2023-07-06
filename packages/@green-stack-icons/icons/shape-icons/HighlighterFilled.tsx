import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <HighlighterFilled/> -------------------------------------------------------------------- */

export const HighlighterFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} d="M9 14v8l6-3v-5H9Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9 14h6"
    />
    <Path fill={fill} d="M7 9v3c0 1.1.9 2 2 2h6c1.1 0 2-.9 2-2V9H7Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 9H7"
    />
    <Path fill={fill} d="M19 2v6c0 .6-.4 1-1 1H6c-.6 0-1-.4-1-1V2" />
  </Svg>
)
