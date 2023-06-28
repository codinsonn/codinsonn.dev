import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <GitMergeThin/> ------------------------------------------------------------------------- */

export const GitMergeThin = ({
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
    <Path stroke={fill} strokeLinecap="round" d="M6 8v8" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 14c-3.5.5-8.5-2.5-9-6"
    />
    <Circle cx={6} cy={5} r={3} stroke={fill} strokeLinejoin="round" />
    <Circle cx={6} cy={19} r={3} stroke={fill} strokeLinejoin="round" />
    <Circle cx={18} cy={14} r={3} stroke={fill} strokeLinejoin="round" />
  </Svg>
)

