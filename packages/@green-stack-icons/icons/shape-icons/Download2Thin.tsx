import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Download2Thin/> ------------------------------------------------------------------------ */

export const Download2Thin = ({
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
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M2 14.5C2 16.99 4.01 19 6.5 19h12c1.93 0 3.5-1.57 3.5-3.5a3.504 3.504 0 0 0-4.1-3.45c.07-.34.1-.69.1-1.05 0-3.31-2.69-6-6-6-2.98 0-5.45 2.17-5.91 5.02C3.79 10.23 2 12.15 2 14.5Z"
    />
    <Path stroke={fill} strokeLinejoin="round" d="M12 15V9" />
    <Path stroke={fill} strokeLinecap="round" d="m12 15 1-1h-2l1 1Z" />
  </Svg>
)

