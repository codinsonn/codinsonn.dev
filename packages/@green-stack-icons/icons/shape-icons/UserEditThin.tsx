import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <UserEditThin/> ------------------------------------------------------------------------- */

export const UserEditThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M10 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM16 21H4c-1.1 0-2-.9-2-2 0-2.76 2.24-5 5-5h6c2.76 0 5 2.24 5 5 0 1.1-.9 2-2 2Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="m20.64 5.6-2.48 4.29L18.1 11l.92-.61L21.5 6.1l-.86-.5Z"
    />
  </Svg>
)
