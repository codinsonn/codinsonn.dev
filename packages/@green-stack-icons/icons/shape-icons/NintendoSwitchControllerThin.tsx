import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <NintendoSwitchControllerThin/> --------------------------------------------------------- */

export const NintendoSwitchControllerThin = ({
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
    <Path stroke={fill} d="M2 6a4 4 0 0 1 4-4h4v20H6a4 4 0 0 1-4-4V6Z" />
    <Path
      stroke={fill}
      d="M6 10.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM14 2h4a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4V2Z"
    />
    <Path
      stroke={fill}
      d="M18 17.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z"
    />
  </Svg>
)

