import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <FavouriteThin/> ------------------------------------------------------------------------ */

export const FavouriteThin = ({
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
      d="M20.4 4.62A5.374 5.374 0 0 0 16.54 3c-1.39 0-2.79.54-3.86 1.62l-.68.69-.68-.69A5.43 5.43 0 0 0 7.45 3c-1.4 0-2.79.54-3.85 1.62-2.13 2.18-2.13 5.68 0 7.84L12.01 21l7.71-7.84.68-.69c2.13-2.17 2.13-5.67 0-7.85Z"
    />
  </Svg>
)

