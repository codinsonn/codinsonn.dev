import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ShareThin/> ---------------------------------------------------------------------------- */

export const ShareThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinejoin="round"
      d="M17.5 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM17.5 22a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM6.5 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.49 7.28-4.98 2.94M14.49 16.72l-4.98-2.94"
    />
  </Svg>
)
