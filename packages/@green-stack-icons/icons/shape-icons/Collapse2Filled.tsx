import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Collapse2Filled/> ---------------------------------------------------------------------- */

export const Collapse2Filled = ({
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
      d="M16 1a1 1 0 0 1 1 1v5h5a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1ZM8 1a1 1 0 0 1 1 1v6a1 1 0 0 1-1 1H2a1 1 0 0 1 0-2h5V2a1 1 0 0 1 1-1ZM1 16a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v6a1 1 0 1 1-2 0v-5H2a1 1 0 0 1-1-1ZM15 16a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-5v5a1 1 0 1 1-2 0v-6Z"
      clipRule="evenodd"
    />
  </Svg>
)

