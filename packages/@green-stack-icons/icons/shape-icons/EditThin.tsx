import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <EditThin/> ----------------------------------------------------------------------------- */

export const EditThin = ({
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
    <Path d="M20 12v9c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h9" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M20 12v9c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V5c0-.55.45-1 1-1h9"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m19.15 2.38-9.91 9.91L8 16l3.71-1.24 9.91-9.91c.45-.45.51-1.14.12-1.53l-1.06-1.06c-.39-.39-1.08-.34-1.53.12Z"
    />
  </Svg>
)

