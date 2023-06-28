import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Unlock3Thin/> -------------------------------------------------------------------------- */

export const Unlock3Thin = ({
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
      d="M8 11V6c0-2.21 1.79-4 4-4s4 1.79 4 4v1M6 11h12v5c0 3.31-2.69 6-6 6s-6-2.69-6-6v-5Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 17.75v-1.5M12 16.25a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
  </Svg>
)

