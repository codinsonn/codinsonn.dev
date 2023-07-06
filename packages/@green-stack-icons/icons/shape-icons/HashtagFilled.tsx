import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <HashtagFilled/> ------------------------------------------------------------------------ */

export const HashtagFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M10.196 1.02a1 1 0 0 1 .784 1.176l-4 20a1 1 0 1 1-1.96-.392l4-20a1 1 0 0 1 1.176-.785ZM18.196 1.02a1 1 0 0 1 .784 1.176l-4 20a1 1 0 1 1-1.96-.392l4-20a1 1 0 0 1 1.176-.785Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M1 8.5a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM1 15.5a1 1 0 0 1 1-1h20a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)
