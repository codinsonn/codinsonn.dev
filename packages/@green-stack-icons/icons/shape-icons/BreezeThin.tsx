import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <BreezeThin/> --------------------------------------------------------------------------- */

export const BreezeThin = ({
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
      d="M2 9h7.6M7.4 5.458C7.8 4.625 8.6 4 9.6 4 10.9 4 12 5.146 12 6.5S10.9 9 9.6 9M2 15h10.74M10.667 18.542c.377.833 1.13 1.458 2.072 1.458C13.964 20 15 18.854 15 17.5S13.964 15 12.74 15M8 12h10.62M15.531 7c.58-1.2 1.738-2 3.09-2C20.455 5 22 6.6 22 8.5S20.455 12 18.62 12"
    />
  </Svg>
)

