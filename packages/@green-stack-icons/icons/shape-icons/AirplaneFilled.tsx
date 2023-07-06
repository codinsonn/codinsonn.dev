import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <AirplaneFilled/> ----------------------------------------------------------------------- */

export const AirplaneFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M13.394 8.08A1 1 0 0 0 12 9v2a1 1 0 0 0 .606.92l7 3A1 1 0 0 0 21 14v-2a1 1 0 0 0-.606-.92l-7-3Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12 9a1 1 0 0 0-1.394-.92l-7 3A1 1 0 0 0 3 12v2a1 1 0 0 0 1.394.92l7-3A1 1 0 0 0 12 11V9Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12 1c-1.102 0-2 .898-2 2v15.4a1 1 0 0 0 1.371.928l.629-.251.629.251A1 1 0 0 0 14 18.4V3c0-1.102-.898-2-2-2Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12.371 17.072a1 1 0 0 0-.742 0l-5 2A1 1 0 0 0 6 20v2a1 1 0 0 0 1.371.928L12 21.078l4.629 1.851A1 1 0 0 0 18 22v-2a1 1 0 0 0-.629-.928l-5-2Z"
      clipRule="evenodd"
    />
  </Svg>
)
