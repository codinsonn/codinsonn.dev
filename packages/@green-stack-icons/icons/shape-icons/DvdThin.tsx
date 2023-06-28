import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <DvdThin/> ------------------------------------------------------------------------------ */

export const DvdThin = ({
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
      clipRule="evenodd"
    />
    <Path
      stroke={fill}
      d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
      clipRule="evenodd"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      d="M12 11.933V12M18 9s.867 1.224.867 3S18 15 18 15M5.867 9C5.289 9.816 5 10.816 5 12s.289 2.184.867 3"
    />
  </Svg>
)

