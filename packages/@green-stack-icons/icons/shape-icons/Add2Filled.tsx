import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Add2Filled/> --------------------------------------------------------------------------- */

export const Add2Filled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M10.5 4.5c0-.832.668-1.5 1.5-1.5s1.5.668 1.5 1.5v15c0 .832-.668 1.5-1.5 1.5s-1.5-.668-1.5-1.5v-15Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M3 12c0-.832.668-1.5 1.5-1.5h15c.832 0 1.5.668 1.5 1.5s-.668 1.5-1.5 1.5h-15c-.832 0-1.5-.668-1.5-1.5Z"
      clipRule="evenodd"
    />
  </Svg>
)
