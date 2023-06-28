import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <GitCommitFilled/> ---------------------------------------------------------------------- */

export const GitCommitFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
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
      fill={fill}
      fillRule="evenodd"
      d="M15 12a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2h-6a1 1 0 0 1-1-1ZM1 12a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Circle cx={12} cy={12} r={4} stroke={stroke} strokeLinejoin="round" />
    <Circle cx={12} cy={12} r={4} fill={fill} />
  </Svg>
)

