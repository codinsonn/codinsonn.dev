import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ArrowUpFilled/> ------------------------------------------------------------------------ */

export const ArrowUpFilled = ({
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
      d="M12 2a1 1 0 0 1 1 1v18a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M11.293 2.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1-1.414 1.414L12 4.414 6.707 9.707a1 1 0 0 1-1.414-1.414l6-6Z"
      clipRule="evenodd"
    />
  </Svg>
)

