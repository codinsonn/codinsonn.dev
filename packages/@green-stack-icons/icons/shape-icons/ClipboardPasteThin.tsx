import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ClipboardPasteThin/> ------------------------------------------------------------------- */

export const ClipboardPasteThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 18v-7c0-.55.45-1 1-1h5V5c0-.55-.45-1-1-1h-3v1c0 .55-.45 1-1 1H8c-.55 0-1-.45-1-1V4H4c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h7Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6H8c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h4c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1ZM12 10h8c.55 0 1 .45 1 1v10c0 .55-.45 1-1 1h-8c-.55 0-1-.45-1-1V11c0-.55.45-1 1-1Z"
    />
  </Svg>
)
