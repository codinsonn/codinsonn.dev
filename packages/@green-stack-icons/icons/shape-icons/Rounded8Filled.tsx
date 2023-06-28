import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Rounded8Filled/> ----------------------------------------------------------------------- */

export const Rounded8Filled = ({
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <Path
      fill={fill}
      d="M12.2 11.6h-.4c-1.2 0-2.2-1-2.2-2.2v-.7c0-1.2 1-2.2 2.2-2.2h.4c1.2 0 2.2 1 2.2 2.2v.6c.1 1.3-1 2.3-2.2 2.3ZM12.2 11.6h-.3c-1.5 0-2.7 1.2-2.7 2.7v.6c0 1.5 1.2 2.7 2.7 2.7h.3c1.5 0 2.7-1.2 2.7-2.7v-.6c-.1-1.5-1.3-2.7-2.7-2.7Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12.2 11.6h-.4c-1.2 0-2.2-1-2.2-2.2v-.7c0-1.2 1-2.2 2.2-2.2h.4c1.2 0 2.2 1 2.2 2.2v.6c.1 1.3-1 2.3-2.2 2.3ZM12.2 11.6h-.3c-1.5 0-2.7 1.2-2.7 2.7v.6c0 1.5 1.2 2.7 2.7 2.7h.3c1.5 0 2.7-1.2 2.7-2.7v-.6c-.1-1.5-1.3-2.7-2.7-2.7Z"
    />
  </Svg>
)

