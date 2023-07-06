import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <PageBreakFilled/> ---------------------------------------------------------------------- */

export const PageBreakFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M7 13H5v-2h2v2ZM4 13H2v-2h2v2ZM10 13H8v-2h2v2ZM13 13h-2v-2h2v2ZM16 13h-2v-2h2v2ZM19 13h-2v-2h2v2ZM22 13h-2v-2h2v2Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M18 2H6v7h12V2ZM18 15H6v7h12v-7Z" />
  </Svg>
)
