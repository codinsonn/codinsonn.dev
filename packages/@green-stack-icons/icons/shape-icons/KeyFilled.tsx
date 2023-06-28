import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <KeyFilled/> ---------------------------------------------------------------------------- */

export const KeyFilled = ({
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
      d="M13 11.9A5.002 5.002 0 0 0 12 2a5 5 0 0 0-2 9.584V20l2 2 3-3-2-2 2-2-2-2v-1.1Z"
    />
    <Circle cx={12} cy={6} r={1} stroke={stroke} strokeLinejoin="round" />
    <Circle cx={12} cy={6} r={1} fill={fill} />
  </Svg>
)

