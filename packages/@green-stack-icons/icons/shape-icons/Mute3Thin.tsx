import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Mute3Thin/> ---------------------------------------------------------------------------- */

export const Mute3Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path stroke={fill} strokeLinecap="round" d="m17 9.5 5 5M22 9.5l-5 5" />
    <Path stroke={fill} strokeLinejoin="round" d="m5 8 8-5v18l-8-5V8Z" clipRule="evenodd" />
    <Path stroke={fill} strokeLinecap="round" d="M2 8v8" />
  </Svg>
)
