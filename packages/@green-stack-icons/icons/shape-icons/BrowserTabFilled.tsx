import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <BrowserTabFilled/> --------------------------------------------------------------------- */

export const BrowserTabFilled = ({
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
      d="M3 20h18c.55 0 1-.45 1-1V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v15c0 .55.45 1 1 1Z"
    />
    <Path fill={fill} d="M2 8h20V4c0-.55-.45-1-1-1H3c-.55 0-1 .45-1 1v4Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 5h.01M7.99 5H8M10.99 5H11"
    />
    <Path stroke={stroke} strokeLinejoin="round" d="M2 8h20" />
  </Svg>
)

