import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <DarkModeFilled/> ----------------------------------------------------------------------- */

export const DarkModeFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M20.005 14.557a8.19 8.19 0 0 1-1.93 3.029 8.247 8.247 0 0 1-11.66 0 8.24 8.24 0 0 1 0-11.657c.89-.89 1.92-1.53 3.03-1.929a8.232 8.232 0 0 0 1.93 8.627 8.238 8.238 0 0 0 8.63 1.93Z"
    />
  </Svg>
)
