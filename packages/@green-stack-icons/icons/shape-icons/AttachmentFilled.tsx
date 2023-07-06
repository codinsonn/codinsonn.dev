import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <AttachmentFilled/> --------------------------------------------------------------------- */

export const AttachmentFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M10 3C8.352 3 7 4.352 7 6v10c0 2.748 2.252 5 5 5s5-2.252 5-5V9a1 1 0 1 1 2 0v7c0 3.852-3.148 7-7 7s-7-3.148-7-7V6c0-2.752 2.248-5 5-5 2.584 0 4.86 2.092 4.985 4.685.003.035.005.07.005.105l.01 9.209c0 .048-.003.096-.01.143v.958a2.9 2.9 0 0 1-2.9 2.9A3.095 3.095 0 0 1 9 15.91V7a1 1 0 1 1 2 0v8.91c0 .598.492 1.09 1.09 1.09a.9.9 0 0 0 .9-.9V5.91C12.99 4.367 11.602 3 10 3Z"
    />
  </Svg>
)
