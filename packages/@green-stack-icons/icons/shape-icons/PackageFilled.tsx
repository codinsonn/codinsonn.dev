import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <PackageFilled/> ------------------------------------------------------------------------ */

export const PackageFilled = ({
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
      d="M21 8a1 1 0 0 0-1.447-.894l-8 4A1 1 0 0 0 11 12v9a1 1 0 0 0 1.447.894l8-4A1 1 0 0 0 21 17V8Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M4.447 7.106A1 1 0 0 0 3 8v9a1 1 0 0 0 .553.894l8 4A1 1 0 0 0 13 21v-9a1 1 0 0 0-.553-.894l-8-4Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M11.553 3.106a1 1 0 0 1 .894 0l8 4a1 1 0 0 1 0 1.788l-8 4a1 1 0 0 1-.894 0l-8-4a1 1 0 0 1 0-1.788l8-4ZM6.236 8 12 10.882 17.764 8 12 5.118 6.236 8Z"
      clipRule="evenodd"
    />
  </Svg>
)

