import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <IdeaOnThin/> --------------------------------------------------------------------------- */

export const IdeaOnThin = ({
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
    <Path d="M11 2C8.66 2 5.71 3.72 5.76 8.16l-3.72 4.82c-.11.14.02.32.22.32l2.48 1.23c.13.92.61 3.6.87 4.94.09.42 4.19.1 4.19.1L11 22" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M11 2C8.66 2 5.71 3.72 5.76 8.16l-3.72 4.82c-.11.14.02.32.22.32l2.48 1.23c.13.92.61 3.6.87 4.94.09.42 4.19.1 4.19.1L11 22M15.28 2l-1.02 2.85M21.69 4.74 18.27 7.3M22 12.11l-3.27-.24"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M13.49 15.22c1.18-.6 4.12-3.64 2.35-5.97-1.44-1.89-4.17-1.89-5.61 0-1.77 2.33 1.18 5.36 2.35 5.97.29.14.62.14.91 0ZM13.04 11.78v3.55M11.72 17.91h2.63M11.72 15.33h2.63"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M13 11.78a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
  </Svg>
)

