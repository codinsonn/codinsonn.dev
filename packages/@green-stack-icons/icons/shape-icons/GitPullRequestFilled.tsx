import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <GitPullRequestFilled/> ----------------------------------------------------------------- */

export const GitPullRequestFilled = ({
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
      d="M12 5a1 1 0 0 1 1-1h2a4 4 0 0 1 4 4v8a1 1 0 1 1-2 0V8a2 2 0 0 0-2-2h-2a1 1 0 0 1-1-1ZM6 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <Circle cx={6} cy={5} r={3} stroke={stroke} strokeLinejoin="round" />
    <Circle cx={6} cy={19} r={3} stroke={stroke} strokeLinejoin="round" />
    <Circle cx={18} cy={19} r={3} stroke={stroke} strokeLinejoin="round" />
    <Circle cx={6} cy={5} r={3} fill={fill} />
    <Circle cx={6} cy={19} r={3} fill={fill} />
    <Circle cx={18} cy={19} r={3} fill={fill} />
  </Svg>
)

