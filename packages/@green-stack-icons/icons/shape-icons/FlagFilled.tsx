import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <FlagFilled/> --------------------------------------------------------------------------- */

export const FlagFilled = ({
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
    <Path fill={fill} d="M20 2H4v11h16l-3-5.5L20 2Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M4 1a1 1 0 0 1 1 1v20a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)

