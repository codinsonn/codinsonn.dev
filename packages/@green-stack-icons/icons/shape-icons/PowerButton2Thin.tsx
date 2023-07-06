import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <PowerButton2Thin/> --------------------------------------------------------------------- */

export const PowerButton2Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path d="M17 7.76c1.83 1.46 3 3.71 3 6.24 0 4.42-3.58 8-8 8s-8-3.58-8-8c0-2.53 1.17-4.78 3-6.24" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 7.76c1.83 1.46 3 3.71 3 6.24 0 4.42-3.58 8-8 8s-8-3.58-8-8c0-2.53 1.17-4.78 3-6.24"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 11c-.83 0-1.5-.67-1.5-1.5v-6c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v6c0 .83-.67 1.5-1.5 1.5Z"
    />
  </Svg>
)
