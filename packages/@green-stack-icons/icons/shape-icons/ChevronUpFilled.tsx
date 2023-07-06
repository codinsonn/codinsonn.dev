import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ChevronUpFilled/> ---------------------------------------------------------------------- */

export const ChevronUpFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M3.293 16.707a1 1 0 0 0 1.414 0L12 9.414l7.293 7.293a1 1 0 0 0 1.414-1.414l-8-8a1 1 0 0 0-1.414 0l-8 8a1 1 0 0 0 0 1.414Z"
      clipRule="evenodd"
    />
  </Svg>
)
