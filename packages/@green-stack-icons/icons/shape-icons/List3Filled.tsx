import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <List3Filled/> -------------------------------------------------------------------------- */

export const List3Filled = ({
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
    <Circle cx={4} cy={4} r={2} fill={fill} />
    <Circle cx={4} cy={12} r={2} fill={fill} />
    <Circle cx={4} cy={20} r={2} fill={fill} />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M8 12a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM8 4a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1ZM8 20a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H9a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)

