import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <UserEditFilled/> ----------------------------------------------------------------------- */

export const UserEditFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM16 21H4c-1.1 0-2-.9-2-2 0-2.76 2.24-5 5-5h6c2.76 0 5 2.24 5 5 0 1.1-.9 2-2 2Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="m20.276 4.232 2.59 1.505-3.098 5.357-2.774 1.84.18-3.337 3.102-5.365Z"
      clipRule="evenodd"
    />
  </Svg>
)
