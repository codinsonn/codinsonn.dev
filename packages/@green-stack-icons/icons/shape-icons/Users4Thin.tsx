import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Users4Thin/> --------------------------------------------------------------------------- */

export const Users4Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17.64 14.97C16.71 14.79 16 13.98 16 13c0-.14.02-.29.05-.42A5.94 5.94 0 0 0 12 11c-1.57 0-2.99.6-4.05 1.58.03.13.05.28.05.42 0 .98-.71 1.79-1.64 1.97-.01.02-.02.03-.02.05A3.99 3.99 0 0 1 10 19h4c0-2.1 1.61-3.81 3.66-3.98 0-.02-.01-.03-.02-.05Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM18 15c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4ZM18 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4ZM6 15c-2.21 0-4 1.79-4 4h8c0-2.21-1.79-4-4-4ZM6 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
    />
  </Svg>
)
