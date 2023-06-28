import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <CollapseFilled/> ----------------------------------------------------------------------- */

export const CollapseFilled = ({
  size = 24,
  fill = '#333333',
  ...svgProps
}: IconProps) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    {...svgProps}
  >
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M22.707 1.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 1 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M16 2a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2h-5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1ZM1.293 1.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M8 2a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h4V3a1 1 0 0 1 1-1ZM8.707 15.293a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414l6-6a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M2 16a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0v-4H3a1 1 0 0 1-1-1ZM15.293 15.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414l-6-6a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M15 16a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2h-4v4a1 1 0 1 1-2 0v-5Z"
      clipRule="evenodd"
    />
  </Svg>
)

