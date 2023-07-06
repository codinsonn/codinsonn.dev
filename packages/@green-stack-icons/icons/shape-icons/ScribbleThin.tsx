import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ScribbleThin/> ------------------------------------------------------------------------- */

export const ScribbleThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.814 2c.627 0 1.755.345 1.253 1.723-.626 1.722-5.64 6.316-5.013 7.465.627 1.148 10.027-6.317 10.653-5.168.627 1.148-6.893 7.465-6.266 8.613.626 1.149 9.4-5.742 9.4-4.594 0 1.149-7.52 6.317-6.894 8.04.627 1.723 6.894-4.02 8.774-3.446 1.88.575-6.367 5.98-5.74 7.13.627 1.148 4.333-2.298 5.586-1.15"
    />
  </Svg>
)
