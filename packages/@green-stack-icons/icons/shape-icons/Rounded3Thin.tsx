import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Rounded3Thin/> ------------------------------------------------------------------------- */

export const Rounded3Thin = ({
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
      d="M12 22.5c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9.2 7h3.2c2.7 0 3.9 3.9-.4 5.1M8.3 16.4c.2.3.4.6.8.8.9.7 1.9.8 2.5.8.8 0 1.9.1 2.8-.6.8-.6 1.7-1.9 1.3-3.3-.4-1.3-1.9-2.3-3.6-2"
    />
  </Svg>
)

