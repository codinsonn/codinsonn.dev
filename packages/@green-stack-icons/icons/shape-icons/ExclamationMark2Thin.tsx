import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ExclamationMark2Thin/> ----------------------------------------------------------------- */

export const ExclamationMark2Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12.04 14c1.05 0 1.99-.77 2.09-1.84l.84-7.74C15.18 3.06 14.14 2 12.88 2H11.1C9.85 2 8.9 3.06 9.01 4.32l.84 7.74c.2 1.17 1.04 1.94 2.19 1.94ZM12 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </Svg>
)
