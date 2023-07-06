import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ActivityFilled/> ----------------------------------------------------------------------- */

export const ActivityFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M13.04 4a1 1 0 0 1 .938.79l2.341 10.927 1.762-4.11A1 1 0 0 1 19 11h3a1 1 0 1 1 0 2h-2.34l-2.74 6.394a1 1 0 0 1-1.898-.184L12.838 9.018l-1.88 6.268a1 1 0 0 1-1.877.107l-2.15-5.018-1.037 2.071A1 1 0 0 1 5 13H2a1 1 0 1 1 0-2h2.382l1.724-3.447a1 1 0 0 1 1.813.053l1.915 4.468 2.208-7.361A1 1 0 0 1 13.04 4Z"
      clipRule="evenodd"
    />
  </Svg>
)
