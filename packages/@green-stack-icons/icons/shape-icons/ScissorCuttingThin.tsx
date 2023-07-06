import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ScissorCuttingThin/> ------------------------------------------------------------------- */

export const ScissorCuttingThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path stroke={fill} strokeLinejoin="round" d="M23 13h-2M20 13h-2M17 13h-2M14 13h-2M11 13H9" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 12 5 9M21.65 6.67 11 12l-6 3M5 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      d="M11 12a.505.505 0 0 1 .22-.67l9.43-4.72a.993.993 0 0 1 1.34.45l-10.33 5.17c-.24.12-.54.02-.66-.23Z"
    />
  </Svg>
)
