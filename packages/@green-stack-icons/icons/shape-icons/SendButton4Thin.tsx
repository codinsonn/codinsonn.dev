import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <SendButton4Thin/> ---------------------------------------------------------------------- */

export const SendButton4Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.03 14.24 8 22l3-6L22 2 7.03 14.24Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m11 16-3 6 7.76-3.88L11 16ZM2 12l5.03 2.24L22 2 2 12ZM11 16l9 4 2-18-11 14Z"
    />
  </Svg>
)
