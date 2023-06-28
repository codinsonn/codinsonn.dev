import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <DatabaseThin/> ------------------------------------------------------------------------- */

export const DatabaseThin = ({
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
      d="M2 19c0 1.66 4.48 3 10 3s10-1.34 10-3v-5c0 1.66-4.48 3-10 3S2 15.66 2 14v5Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22 14c0 1.66-4.48 3-10 3S2 15.66 2 14V9c0 1.66 4.48 3 10 3s10-1.34 10-3v5Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 9c0 1.66 4.48 3 10 3s10-1.34 10-3V4.5C22 5.88 17.52 7 12 7S2 5.88 2 4.5V9Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 7c5.523 0 10-1.12 10-2.5S17.523 2 12 2 2 3.12 2 4.5 6.477 7 12 7Z"
    />
  </Svg>
)

