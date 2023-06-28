import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Train2Filled/> ------------------------------------------------------------------------- */

export const Train2Filled = ({
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
    <Path fill={fill} d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3H4V5Z" />
    <Path stroke={stroke} strokeLinejoin="round" d="M20 8H4M12 8V2" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M6.697 18h10.606l3.252 2.168-1.11 1.664L16.697 20H7.303l-2.748 1.832-1.11-1.664L6.697 18Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M4 8v9a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8H4Z" />
    <Circle cx={8} cy={16} r={1} stroke={stroke} strokeLinejoin="round" />
    <Circle cx={16} cy={16} r={1} stroke={stroke} strokeLinejoin="round" />
    <Circle cx={8} cy={16} r={1} fill={fill} />
    <Circle cx={16} cy={16} r={1} fill={fill} />
  </Svg>
)

