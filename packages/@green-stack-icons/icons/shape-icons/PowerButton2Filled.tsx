import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <PowerButton2Filled/> ------------------------------------------------------------------- */

export const PowerButton2Filled = ({
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
    <Circle cx={12} cy={12} r={10} fill={fill} />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 7.39a5.5 5.5 0 1 0 6 0"
    />
    <Path stroke={stroke} strokeLinecap="round" d="M12 6v5" />
  </Svg>
)

