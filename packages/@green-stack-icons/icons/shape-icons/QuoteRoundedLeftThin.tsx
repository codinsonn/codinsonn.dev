import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <QuoteRoundedLeftThin/> ----------------------------------------------------------------- */

export const QuoteRoundedLeftThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M10 8c-.61 0-1.21.11-1.78.33C6.26 9.1 4.97 11.28 5 13.4c0 .22.02.43.06.65"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7.5 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM19 8c-.61 0-1.21.11-1.78.33-1.96.77-3.25 2.95-3.22 5.07 0 .22.02.43.06.65"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M16.5 16a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
  </Svg>
)
