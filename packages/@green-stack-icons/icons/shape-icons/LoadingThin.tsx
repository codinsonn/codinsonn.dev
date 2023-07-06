import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <LoadingThin/> -------------------------------------------------------------------------- */

export const LoadingThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 22v-2.5M12 4.5V2M17 20.66l-1.26-2.17M8.26 5.51 7 3.34M20.66 17l-2.17-1.26M5.51 8.26 3.34 7M22 12h-2.5M4.5 12H2M20.66 7l-2.17 1.26M5.51 15.74 3.34 17M17 3.34l-1.26 2.17M8.26 18.49 7 20.66"
    />
  </Svg>
)
