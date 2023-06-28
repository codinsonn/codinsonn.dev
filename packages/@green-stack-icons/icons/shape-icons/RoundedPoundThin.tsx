import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <RoundedPoundThin/> --------------------------------------------------------------------- */

export const RoundedPoundThin = ({
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M15.7 7.9c-.1-.1-1.6-1.7-3.6-1.3-.3 0-1.4.3-2.1 1.2-.7.8-.7 1.8-.7 2.2 0 2.1 1.6 2.7 1.6 4.4 0 .7-.2 1.8-1.5 3.1 1.4-.7 2.4-.7 3-.5.5.2.9.4 1.6.5.7.1 1.3-.1 1.7-.3M8.3 12.9h5.4"
    />
  </Svg>
)

