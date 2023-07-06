import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <List4Filled/> -------------------------------------------------------------------------- */

export const List4Filled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M7 3H3v4h4V3ZM21 4H9v2h12V4ZM7 17H3v4h4v-4ZM21 18H9v2h12v-2ZM7 10H3v4h4v-4ZM21 11H9v2h12v-2Z"
    />
  </Svg>
)
