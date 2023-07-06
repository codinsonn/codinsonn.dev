import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <UserVerifiedFilled/> ------------------------------------------------------------------- */

export const UserVerifiedFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M16 21H4c-1.1 0-2-.9-2-2 0-2.76 2.24-5 5-5h6c2.76 0 5 2.24 5 5 0 1.1-.9 2-2 2ZM10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M22.707 8.293a1 1 0 0 1 0 1.414l-3.5 3.5a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414l1.293 1.293 2.793-2.793a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
