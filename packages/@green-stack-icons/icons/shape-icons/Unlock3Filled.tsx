import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Unlock3Filled/> ------------------------------------------------------------------------ */

export const Unlock3Filled = ({
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
      fillRule="evenodd"
      d="M12 4c-1.658 0-3 1.342-3 3v6H7V7c0-2.762 2.238-5 5-5s5 2.238 5 5v1a1 1 0 1 1-2 0V7c0-1.658-1.342-3-3-3Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M6 11h12v5c0 3.31-2.69 6-6 6s-6-2.69-6-6v-5Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 17.75v-1.5M12 16.25a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
  </Svg>
)

