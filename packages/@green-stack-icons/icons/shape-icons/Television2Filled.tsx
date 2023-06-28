import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Television2Filled/> -------------------------------------------------------------------- */

export const Television2Filled = ({
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
      d="M19 19a1 1 0 0 1-1 1H6a1 1 0 1 1 0-2h12a1 1 0 0 1 1 1Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M2 4h20v12H2z" />
  </Svg>
)

