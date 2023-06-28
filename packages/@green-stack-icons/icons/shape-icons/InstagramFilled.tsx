import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <InstagramFilled/> ---------------------------------------------------------------------- */

export const InstagramFilled = ({
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
      d="M19.34 22H4.66C3.19 22 2 20.81 2 19.34V4.66C2 3.19 3.19 2 4.66 2h14.67C20.81 2 22 3.19 22 4.66v14.67c0 1.48-1.19 2.67-2.66 2.67Z"
    />
    <Path fill={fill} d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
    <Path fill={fill} d="M18 5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z" />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      d="M18 5.5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
  </Svg>
)

