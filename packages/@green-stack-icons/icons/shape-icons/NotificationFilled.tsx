import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <NotificationFilled/> ------------------------------------------------------------------- */

export const NotificationFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M10 18h4a2.5 2.5 0 1 1-4 0ZM13.58 5.22c.27-.34.42-.76.42-1.22 0-1.1-.9-2-2-2s-2 .9-2 2c0 .46.15.88.42 1.22"
    />
    <Path fill={fill} d="m6 14-2 4h16l-2-4v-3c0-3.31-2.69-6-6-6s-6 2.69-6 6v3Z" />
  </Svg>
)
