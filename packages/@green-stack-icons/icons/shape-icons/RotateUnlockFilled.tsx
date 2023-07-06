import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <RotateUnlockFilled/> ------------------------------------------------------------------- */

export const RotateUnlockFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M19 12c0-4.448-3.552-8-8-8s-8 3.552-8 8 3.552 8 8 8a1 1 0 1 1 0 2C5.448 22 1 17.552 1 12S5.448 2 11 2s10 4.448 10 10v1a1 1 0 1 1-2 0v-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M23.054 10h-6.108L20 14.887 23.054 10ZM8 9a3 3 0 0 1 6 0v1h-2V9a1 1 0 1 0-2 0v3a1 1 0 1 1-2 0V9Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M7 12a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z" />
  </Svg>
)
