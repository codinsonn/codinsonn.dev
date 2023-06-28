import * as React from 'react'
import Svg, { Rect, Circle, Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Remote2Thin/> -------------------------------------------------------------------------- */

export const Remote2Thin = ({
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
    <Rect
      width={12}
      height={20}
      x={6}
      y={2}
      stroke={fill}
      strokeLinejoin="round"
      rx={2}
    />
    <Circle cx={12} cy={8} r={3} stroke={fill} strokeLinejoin="round" />
    <Path stroke={fill} d="M9 17h2M13 17h2M12 14v2M12 18v2" />
  </Svg>
)

