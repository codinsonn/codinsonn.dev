import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ExpandThin/> --------------------------------------------------------------------------- */

export const ExpandThin = ({
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
      d="m22 2-6 6M22 7V2h-5M2 2l6 6M7 2H2v5M2 22l6-6M2 17v5h5M22 22l-6-6M17 22h5v-5"
    />
  </Svg>
)

