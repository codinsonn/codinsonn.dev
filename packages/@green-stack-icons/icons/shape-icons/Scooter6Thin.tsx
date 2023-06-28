import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Scooter6Thin/> ------------------------------------------------------------------------- */

export const Scooter6Thin = ({
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
      d="M2.5 15.5C2.11 16.086 2 17 2 17h2a2 2 0 1 1 4 0h8a2 2 0 1 1 4 0h2a4 4 0 0 0-4-4l-1-8h-1v5l-1.5 5H9L7 9H3l1 5s-1.11.914-1.5 1.5ZM16 5h-2"
    />
    <Circle cx={18} cy={17} r={2} stroke={fill} strokeLinecap="round" />
    <Circle cx={6} cy={17} r={2} stroke={fill} strokeLinecap="round" />
    <Path stroke={fill} strokeLinecap="round" d="M2 9h6" />
  </Svg>
)

