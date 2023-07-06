import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <List2Filled/> -------------------------------------------------------------------------- */

export const List2Filled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M6 6a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1ZM22 6a1 1 0 0 1-1 1H9a1 1 0 0 1 0-2h12a1 1 0 0 1 1 1ZM6 12a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1ZM22 12a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1ZM6 18a1 1 0 0 1-1 1H3a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1ZM22 18a1 1 0 0 1-1 1H9a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1Z"
      clipRule="evenodd"
    />
  </Svg>
)
