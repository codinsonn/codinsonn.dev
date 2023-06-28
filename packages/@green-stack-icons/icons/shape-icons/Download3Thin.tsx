import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Download3Thin/> ------------------------------------------------------------------------ */

export const Download3Thin = ({
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
    <Circle cx={12} cy={12} r={10} stroke={fill} />
    <Path stroke={fill} d="M12 6v8M8 10l4 4 4-4M7 17h10" />
  </Svg>
)

