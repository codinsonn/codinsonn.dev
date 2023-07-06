import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <LifelineFilled/> ----------------------------------------------------------------------- */

export const LifelineFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M9.01 3a1 1 0 0 1 .944.702l4.193 13.416 1.934-4.512A1 1 0 0 1 17 12h5a1 1 0 1 1 0 2h-4.34l-2.74 6.394a1 1 0 0 1-1.874-.096L8.969 7.254l-2.02 6.062A1 1 0 0 1 6 14H2a1 1 0 1 1 0-2h3.28L8.05 3.684A1 1 0 0 1 9.01 3Z"
      clipRule="evenodd"
    />
  </Svg>
)
