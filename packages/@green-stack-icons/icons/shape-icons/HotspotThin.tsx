import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <HotspotThin/> -------------------------------------------------------------------------- */

export const HotspotThin = ({
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
    <Path d="M4.37 15.77C3.29 14.07 2.8 12 3.08 9.84c.63-4.93 5.15-8.42 10.08-7.76 4.93.63 8.42 5.15 7.76 10.08a8.695 8.695 0 0 1-1.3 3.61" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M4.37 15.77C3.29 14.07 2.8 12 3.08 9.84c.63-4.93 5.15-8.42 10.08-7.76 4.93.63 8.42 5.15 7.76 10.08a8.695 8.695 0 0 1-1.3 3.61"
    />
    <Path d="M8.09 14.25a5.159 5.159 0 0 1-1.22-4.05c.38-2.83 2.97-4.83 5.79-4.46 2.83.38 4.83 2.97 4.46 5.79a5.019 5.019 0 0 1-1.23 2.71" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M8.09 14.25a5.159 5.159 0 0 1-1.22-4.05c.38-2.83 2.97-4.83 5.79-4.46 2.83.38 4.83 2.97 4.46 5.79a5.019 5.019 0 0 1-1.23 2.71M12 22v-9.5"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 12.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
    />
  </Svg>
)

