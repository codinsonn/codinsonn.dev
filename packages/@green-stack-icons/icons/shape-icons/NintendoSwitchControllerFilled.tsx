import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <NintendoSwitchControllerFilled/> ------------------------------------------------------- */

export const NintendoSwitchControllerFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
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
      d="M2 6a4 4 0 0 1 4-4h4v20H6a4 4 0 0 1-4-4V6ZM14 2h4a4 4 0 0 1 4 4v12a4 4 0 0 1-4 4h-4V2Z"
    />
    <Path
      stroke={stroke}
      d="M6 10.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM18 17.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z"
    />
    <Path
      fill={fill}
      d="M6 10.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8ZM18 17.4a1.4 1.4 0 1 0 0-2.8 1.4 1.4 0 0 0 0 2.8Z"
    />
  </Svg>
)

