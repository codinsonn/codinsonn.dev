import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ChevronLeftFilled/> -------------------------------------------------------------------- */

export const ChevronLeftFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M16.707 3.293a1 1 0 0 0-1.414 0l-8 8a1 1 0 0 0 0 1.414l8 8a1 1 0 0 0 1.414-1.414L9.414 12l7.293-7.293a1 1 0 0 0 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>
)
