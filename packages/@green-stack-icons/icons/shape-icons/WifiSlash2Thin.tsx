import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <WifiSlash2Thin/> ----------------------------------------------------------------------- */

export const WifiSlash2Thin = ({
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
      d="M11.99 19.5H12"
    />
    <Path
      stroke={fill}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 20a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1ZM8.45 15.3c.96-.81 2.2-1.3 3.55-1.3 1.35 0 2.59.49 3.55 1.3M5.23 11.48C7.05 9.93 9.41 9 12 9s4.95.93 6.77 2.48M2 7.66C4.7 5.37 8.19 4 12 4c3.81 0 7.3 1.37 10 3.66"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m3 3 18 18"
    />
  </Svg>
)

