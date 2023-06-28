import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <GmailThin/> ---------------------------------------------------------------------------- */

export const GmailThin = ({
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
      d="M19.34 22H4.66C3.19 22 2 20.81 2 19.34V4.66C2 3.19 3.19 2 4.66 2h14.67C20.81 2 22 3.19 22 4.66v14.67c0 1.48-1.19 2.67-2.66 2.67Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M18 17V7l-6 4-6-4v10"
    />
  </Svg>
)

