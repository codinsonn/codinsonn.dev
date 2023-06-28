import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <NetflixFilled/> ------------------------------------------------------------------------ */

export const NetflixFilled = ({
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
      d="M20 22c-1.38-.14-2.76-.25-4.14-.31C11.9 14.93 7.95 8.66 4 2.02 5.38 2.01 6.76 2 8.15 2 12.09 8.55 16.06 14.93 20 22Z"
    />
    <Path
      fill={fill}
      d="M4 2.02c1.38 2.32 2.76 4.6 4.14 6.87v12.8c-1.38.06-2.76.17-4.14.31V2.02ZM16 15.04c1.33 2.26 2.67 4.57 4 6.96V2.02C18.62 2.01 17.38 2 16 2v13.04Z"
    />
  </Svg>
)

