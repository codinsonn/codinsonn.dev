import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <BugFilled/> ---------------------------------------------------------------------------- */

export const BugFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M17.936 2.292a1 1 0 0 1 .003 1.414l-2.6 2.61a1 1 0 0 1-1.418-1.412l2.6-2.61a1 1 0 0 1 1.415-.002ZM6.064 2.292a1 1 0 0 1 1.414.002l2.6 2.61a1 1 0 0 1-1.416 1.412l-2.6-2.61a1 1 0 0 1 .002-1.414ZM17 12.98a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1ZM3 12.98a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1ZM20.866 6.35a1 1 0 0 1-.367 1.366l-2.29 1.32a1 1 0 0 1-.998-1.732l2.29-1.32a1 1 0 0 1 1.365.367ZM16.783 17.502a1 1 0 0 1 1.365-.37l2.35 1.35a1 1 0 1 1-.996 1.735l-2.35-1.35a1 1 0 0 1-.37-1.365ZM3.134 6.35a1 1 0 0 1 1.365-.366l2.29 1.32a1 1 0 0 1-.998 1.732L3.5 7.716a1 1 0 0 1-.367-1.365ZM7.217 17.502a1 1 0 0 1-.369 1.365l-2.35 1.35a1 1 0 0 1-.996-1.734l2.35-1.35a1 1 0 0 1 1.365.369Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="M12 4c3.31 0 6 2.69 6 6v6c0 3.31-2.69 6-6 6s-6-2.69-6-6v-6c0-3.31 2.69-6 6-6Z"
    />
    <Path
      fill={fill}
      d="M12 4C9.32 4 7.04 5.77 6.28 8.19c3.46 2.42 8.12 2.4 11.44.01A5.994 5.994 0 0 0 12 4Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m10.25 13.5 3.5 3.5M13.75 13.5l-3.5 3.5"
    />
  </Svg>
)
