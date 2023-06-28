import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <RepeatThin/> --------------------------------------------------------------------------- */

export const RepeatThin = ({
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
      d="M16 9h5V4"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 9c-2.5-3.56-5.08-6-9-6-1.45 0-2.83.35-4.04.96A8.993 8.993 0 0 0 3 12a9 9 0 0 0 9 9c3.52 0 6.56-2.02 8.04-4.96"
    />
  </Svg>
)

