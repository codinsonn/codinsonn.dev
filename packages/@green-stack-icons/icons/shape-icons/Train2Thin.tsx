import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Train2Thin/> --------------------------------------------------------------------------- */

export const Train2Thin = ({
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
      stroke={fill}
      d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5Z"
    />
    <Path stroke={fill} d="M4 5a3 3 0 0 1 3-3h10a3 3 0 0 1 3 3v3H4V5Z" />
    <Circle cx={8} cy={16} r={1} stroke={fill} />
    <Circle cx={16} cy={16} r={1} stroke={fill} />
    <Path stroke={fill} d="m4 22 3-2h10l3 2M12 8V2" />
  </Svg>
)

