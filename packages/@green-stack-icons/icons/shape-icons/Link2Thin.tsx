import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Link2Thin/> ---------------------------------------------------------------------------- */

export const Link2Thin = ({
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
    <Path d="M14 7h3c2.76 0 5 2.24 5 5 0 1.38-.56 2.63-1.46 3.54-.91.9-2.16 1.46-3.54 1.46h-3" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M14 7h3c2.76 0 5 2.24 5 5 0 1.38-.56 2.63-1.46 3.54-.91.9-2.16 1.46-3.54 1.46h-3"
    />
    <Path d="M10 17H7c-2.76 0-5-2.24-5-5s2.24-5 5-5h3" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M10 17H7c-2.76 0-5-2.24-5-5s2.24-5 5-5h3M17.5 12h-11"
    />
  </Svg>
)

