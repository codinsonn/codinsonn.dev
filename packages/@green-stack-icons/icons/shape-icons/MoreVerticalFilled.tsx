import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MoreVerticalFilled/> ------------------------------------------------------------------- */

export const MoreVerticalFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M10 12a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM10 19a2 2 0 1 0 4 0 2 2 0 0 0-4 0ZM10 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0Z"
    />
  </Svg>
)
