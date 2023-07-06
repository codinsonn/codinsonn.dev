import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <CopyThin/> ----------------------------------------------------------------------------- */

export const CopyThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 6V3c0-.55.45-1 1-1h11c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1h-4V7c0-.55-.45-1-1-1H8Z"
      clipRule="evenodd"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 22H4c-.55 0-1-.45-1-1V7c0-.55.45-1 1-1h11c.55 0 1 .45 1 1v14c0 .55-.45 1-1 1Z"
      clipRule="evenodd"
    />
  </Svg>
)
