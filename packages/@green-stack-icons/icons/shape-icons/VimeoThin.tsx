import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <VimeoThin/> ---------------------------------------------------------------------------- */

export const VimeoThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M2.3 8.01c1.85-2.23 5.33-5.34 7.27-4.27 2.72 1.49 2.33 6.45 3.18 11.18.17.93 4.48-5.67 4.37-6.87-.11-1.2-.8-1.47-2.54-1.66.08-.26.46-2.33 2.83-3.13 1.3-.44 3.2-.4 4.18.67 2.19 2.38-1.1 8.98-4.15 12.74-1.28 1.58-4.32 4.76-6.65 4.28C8.57 20.5 7.76 9.89 6.63 9.54c-.36-.11-1.32.06-2.33 1.21-.36-.55-1.7-2.37-2-2.74Z"
    />
  </Svg>
)
