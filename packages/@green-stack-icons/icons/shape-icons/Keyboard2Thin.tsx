import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Keyboard2Thin/> ------------------------------------------------------------------------ */

export const Keyboard2Thin = ({
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
      d="M2 6a1 1 0 0 1 1-1h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6Z"
      clipRule="evenodd"
    />
    <Path
      stroke={fill}
      d="M5.5 14.5h1v1h-1zM9.5 14.5h5v1h-5zM17.5 14.5h1v1h-1zM5.5 11.5h2v1h-2zM9.5 11.5h1v1h-1zM12.5 11.5h1v1h-1zM16.5 11.5h2v1h-2zM5.5 8.5h1v1h-1zM8.5 8.5h1v1h-1zM11.5 8.5h1v1h-1zM14.5 8.5h1v1h-1zM17.5 8.5h1v1h-1z"
    />
  </Svg>
)

