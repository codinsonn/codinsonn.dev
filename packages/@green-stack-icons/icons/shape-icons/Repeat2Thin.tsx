import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Repeat2Thin/> -------------------------------------------------------------------------- */

export const Repeat2Thin = ({
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
      d="M19.71 7.29C17.59 4.68 15.25 3 12 3c-1.45 0-2.83.35-4.04.96A8.993 8.993 0 0 0 3 12a9 9 0 0 0 9 9c3.52 0 6.56-2.02 8.04-4.96"
    />
    <Path stroke={fill} strokeLinecap="round" d="M18 9h3V6l-3 3Z" />
  </Svg>
)

