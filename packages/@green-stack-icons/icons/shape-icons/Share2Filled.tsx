import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Share2Filled/> ------------------------------------------------------------------------- */

export const Share2Filled = ({
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
    <Path
      fill={fill}
      fillRule="evenodd"
      d="m7.25 12.007 10.4 5.202-.894 1.789-10.4-5.203.894-1.788ZM13.895 7.553a1 1 0 0 1-.448 1.341L7.24 11.998l-.894-1.789 6.207-3.103a1 1 0 0 1 1.341.447Z"
      clipRule="evenodd"
    />
    <Circle cx={5} cy={12} r={3} fill={fill} />
    <Circle cx={19} cy={5} r={3} fill={fill} />
    <Path fill={fill} d="M22 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
  </Svg>
)

