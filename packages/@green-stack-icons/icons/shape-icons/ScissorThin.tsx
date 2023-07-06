import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ScissorThin/> -------------------------------------------------------------------------- */

export const ScissorThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="m5 9 6 3 10.65 5.32" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.65 6.67 11 12l-6 3M5 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      d="M11 12a.505.505 0 0 1 .22-.67l9.43-4.72a.993.993 0 0 1 1.34.45l-10.33 5.17c-.24.12-.54.02-.66-.23Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      d="m22 16.94-10.33-5.16A.488.488 0 0 0 11 12c-.12.25-.02.55.22.67l9.43 4.72c.5.25 1.1.05 1.35-.45Z"
    />
  </Svg>
)
