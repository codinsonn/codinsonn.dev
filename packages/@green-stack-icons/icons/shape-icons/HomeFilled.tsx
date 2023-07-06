import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <HomeFilled/> --------------------------------------------------------------------------- */

export const HomeFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M19 8.89 12 3 5 8.89V21c0 .55.45 1 1 1h12c.55 0 1-.45 1-1V8.89Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M16 2.5v3.87l3 2.52V2.5c0-.28-.22-.5-.5-.5h-2c-.28 0-.5.22-.5.5Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M11.356 2.235a1 1 0 0 1 1.288 0l9.5 8a1 1 0 0 1-1.288 1.53L12 4.307l-8.856 7.458a1 1 0 1 1-1.288-1.53l9.5-8Z"
      clipRule="evenodd"
    />
  </Svg>
)
