import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Expand2Filled/> ------------------------------------------------------------------------ */

export const Expand2Filled = ({
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
      d="M15 2a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0V3h-5a1 1 0 0 1-1-1ZM1 2a1 1 0 0 1 1-1h6a1 1 0 0 1 0 2H3v5a1 1 0 0 1-2 0V2ZM2 15a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1v-6a1 1 0 0 1 1-1ZM22 15a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1h-6a1 1 0 1 1 0-2h5v-5a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)

