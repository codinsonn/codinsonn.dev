import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ScaleTopRightFilled/> ------------------------------------------------------------------ */

export const ScaleTopRightFilled = ({
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
    <Path fill={fill} d="M11 13H2v9h9v-9Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M21.707 2.293a1 1 0 0 1 0 1.414l-8 8a1 1 0 0 1-1.414-1.414l8-8a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M15 3a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V4h-4a1 1 0 0 1-1-1ZM21 11a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1h-7a1 1 0 1 1 0-2h6v-8a1 1 0 0 1 1-1ZM2 3a1 1 0 0 1 1-1h9a1 1 0 1 1 0 2H4v6a1 1 0 1 1-2 0V3Z"
      clipRule="evenodd"
    />
  </Svg>
)

