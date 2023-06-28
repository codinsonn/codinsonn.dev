import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <UserTickFilled/> ----------------------------------------------------------------------- */

export const UserTickFilled = ({
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
      d="M22.684 7.27a1 1 0 0 1 .046 1.414l-3.75 4a1 1 0 0 1-1.46 0l-2.25-2.4a1 1 0 1 1 1.46-1.368l1.52 1.622 3.02-3.222a1 1 0 0 1 1.414-.046Z"
      clipRule="evenodd"
    />
    <Circle cx={10} cy={7} r={4} fill={fill} />
    <Path fill={fill} d="M13 14H7a5 5 0 0 0-5 5v1h16v-1a5 5 0 0 0-5-5Z" />
  </Svg>
)

