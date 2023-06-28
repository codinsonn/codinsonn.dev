import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <MouseCursorHoverThin/> ----------------------------------------------------------------- */

export const MouseCursorHoverThin = ({
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
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M8 15H4c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v8c0 1.1-.9 2-2 2h-2.7L8.8 8.6c-.3-.3-.8 0-.8.4v6Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M8 9v12.8c0 .4.5.7.9.4l3.6-3.6c.3-.3.7-.5 1.1-.6l5.3-.8c.4-.1.6-.6.2-.9L8.8 8.6c-.3-.2-.8 0-.8.4Z"
    />
  </Svg>
)

