import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <DataServer2Thin/> ---------------------------------------------------------------------- */

export const DataServer2Thin = ({
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
      strokeLinecap="square"
      strokeLinejoin="round"
      d="M2 21h20"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 16v4M16 20H8v2h8v-2ZM18.5 9h-13C3.57 9 2 7.43 2 5.5S3.57 2 5.5 2h13C20.43 2 22 3.57 22 5.5S20.43 9 18.5 9ZM18.5 16h-13C3.57 16 2 14.43 2 12.5S3.57 9 5.5 9h13c1.93 0 3.5 1.57 3.5 3.5S20.43 16 18.5 16Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM9.5 6a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM5.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM9.5 13a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
  </Svg>
)

