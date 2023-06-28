import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Menu11Filled/> ------------------------------------------------------------------------- */

export const Menu11Filled = ({
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
      d="M3 15.5c0-.832.668-1.5 1.5-1.5h15c.832 0 1.5.668 1.5 1.5s-.668 1.5-1.5 1.5h-15c-.832 0-1.5-.668-1.5-1.5ZM3 8.5C3 7.668 3.668 7 4.5 7h15c.832 0 1.5.668 1.5 1.5s-.668 1.5-1.5 1.5h-15C3.668 10 3 9.332 3 8.5Z"
      clipRule="evenodd"
    />
  </Svg>
)

