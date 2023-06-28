import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <List4Thin/> ---------------------------------------------------------------------------- */

export const List4Thin = ({
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
      d="M6 2H2v4h4V2ZM22 3H10v2h12V3ZM6 18H2v4h4v-4ZM22 19H10v2h12v-2ZM6 10H2v4h4v-4ZM22 11H10v2h12v-2Z"
    />
  </Svg>
)

