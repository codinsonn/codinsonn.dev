import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <UsbFilled/> ---------------------------------------------------------------------------- */

export const UsbFilled = ({
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
      d="M13 6a1 1 0 1 0-2 0v10.612L7 15.28V13a1 1 0 1 0-2 0v3a1 1 0 0 0 .684.949L11 18.72V20a1 1 0 1 0 2 0v-3.279l5.316-1.772A1 1 0 0 0 19 14v-3a1 1 0 1 0-2 0v2.28l-4 1.333V6Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M4 12a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM16 8h4v4h-4V8Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M12 22a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M10 21a2 2 0 1 1 4 0 2 2 0 0 1-4 0ZM12 .998 15.461 7H8.54L12 .998Z"
      clipRule="evenodd"
    />
  </Svg>
)

