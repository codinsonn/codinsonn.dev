import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <TextSizeIncreaseThin/> ----------------------------------------------------------------- */

export const TextSizeIncreaseThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path d="M13.43 15h7.14L22 19 17 5l-5 14" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.43 15h7.14L22 19 17 5l-5 14"
    />
    <Path d="M3.05 16h4.9L9 19 5.5 9 2 19" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.05 16h4.9L9 19 5.5 9 2 19"
    />
  </Svg>
)
