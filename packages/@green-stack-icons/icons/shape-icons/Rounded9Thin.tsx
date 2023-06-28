import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Rounded9Thin/> ------------------------------------------------------------------------- */

export const Rounded9Thin = ({
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
      d="M12 2.5c-5.52 0-10 4.48-10 10s4.48 10 10 10 10-4.48 10-10-4.48-10-10-10ZM15.4 10.3v.05"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9.8 17.2c.6.5 1.3.8 2.2.8 1.9 0 3.4-1.5 3.4-3.4v-4.3"
    />
    <Path d="M8.6 10.4v-.05A3.374 3.374 0 0 1 12 7c1.88 0 3.37 1.47 3.4 3.35v-.05c0 1.9-1.5 3.4-3.4 3.4s-3.4-1.5-3.4-3.4" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M8.6 10.4v-.05A3.374 3.374 0 0 1 12 7c1.88 0 3.37 1.47 3.4 3.35v-.05c0 1.9-1.5 3.4-3.4 3.4s-3.4-1.5-3.4-3.4"
    />
  </Svg>
)

