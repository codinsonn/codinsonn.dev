import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <TimelineThin/> ------------------------------------------------------------------------- */

export const TimelineThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path d="M10 14.82a4.45 4.45 0 0 1-3.5 1.68C4.01 16.5 2 14.49 2 12s2.01-4.5 4.5-4.5c.92 0 1.83.28 2.58.81.81.57 1.3 1.4 1.86 2.2.35.5.7.99 1.06 1.49.36.5.71.99 1.06 1.49.56.8 1.05 1.63 1.86 2.2.75.53 1.66.81 2.58.81 2.49 0 4.5-2.01 4.5-4.5s-2.01-4.5-4.5-4.5c-1.42 0-2.68.65-3.5 1.68" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 14.82a4.45 4.45 0 0 1-3.5 1.68C4.01 16.5 2 14.49 2 12s2.01-4.5 4.5-4.5c.92 0 1.83.28 2.58.81.81.57 1.3 1.4 1.86 2.2.35.5.7.99 1.06 1.49.36.5.71.99 1.06 1.49.56.8 1.05 1.63 1.86 2.2.75.53 1.66.81 2.58.81 2.49 0 4.5-2.01 4.5-4.5s-2.01-4.5-4.5-4.5c-1.42 0-2.68.65-3.5 1.68"
    />
  </Svg>
)
