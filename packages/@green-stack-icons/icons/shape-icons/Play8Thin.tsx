import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Play8Thin/> ---------------------------------------------------------------------------- */

export const Play8Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.8 10c-.44-2.16-1.58-4.07-3.17-5.48M5.37 4.52A10.001 10.001 0 0 0 2.2 10M8.83 21.48c1 .34 2.06.52 3.17.52a9.8 9.8 0 0 0 3.17-.52M21.8 14c-.44 2.16-1.58 4.07-3.17 5.48M5.37 19.48A10.001 10.001 0 0 1 2.2 14M8.83 2.52A9.8 9.8 0 0 1 12 2a9.8 9.8 0 0 1 3.17.52M9 8v8c0 .39.41.63.75.44l6.995-4c.34-.19.34-.68 0-.87l-6.996-4A.5.5 0 0 0 9 8Z"
    />
  </Svg>
)
