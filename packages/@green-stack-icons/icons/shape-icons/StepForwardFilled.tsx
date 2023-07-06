import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <StepForwardFilled/> -------------------------------------------------------------------- */

export const StepForwardFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} fillRule="evenodd" d="M14 12 6 6v12l8-6Z" clipRule="evenodd" />
    <Path fill={fill} d="M16 18c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2s2 .9 2 2v8c0 1.1-.9 2-2 2Z" />
  </Svg>
)
