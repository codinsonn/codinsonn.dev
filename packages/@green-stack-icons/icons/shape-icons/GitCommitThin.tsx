import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <GitCommitThin/> ------------------------------------------------------------------------ */

export const GitCommitThin = ({
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
    <Path stroke={fill} strokeLinecap="round" d="M16 12h6M2 12h6" />
    <Circle cx={12} cy={12} r={4} stroke={fill} strokeLinejoin="round" />
  </Svg>
)

