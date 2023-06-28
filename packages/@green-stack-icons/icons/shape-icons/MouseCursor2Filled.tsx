import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <MouseCursor2Filled/> ------------------------------------------------------------------- */

export const MouseCursor2Filled = ({
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
      d="M5 3v17.8c0 .4.5.7.9.4l5-5c.4-.4 1-.7 1.7-.8l7.4-1.2c.4-.1.6-.6.2-.9L5.8 2.6c-.3-.2-.8 0-.8.4Z"
    />
  </Svg>
)

