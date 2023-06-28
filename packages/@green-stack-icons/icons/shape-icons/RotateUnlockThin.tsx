import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <RotateUnlockThin/> --------------------------------------------------------------------- */

export const RotateUnlockThin = ({
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
      d="M11 21c-5 0-9-4-9-9s4-9 9-9 9 4 9 9v1"
    />
    <Path stroke={fill} d="m20 13 1.25-2h-2.5L20 13Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 9v0a3 3 0 0 0-3-3v0a3 3 0 0 0-3 3v2M7 12a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4Z"
    />
  </Svg>
)

