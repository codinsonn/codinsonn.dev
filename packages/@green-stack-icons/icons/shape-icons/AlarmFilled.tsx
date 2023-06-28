import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <AlarmFilled/> -------------------------------------------------------------------------- */

export const AlarmFilled = ({
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
    <Path fill={fill} d="M12 22a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M17.963 1.293a1 1 0 0 1 1.414 0l3.33 3.33a1 1 0 1 1-1.414 1.414l-3.33-3.33a1 1 0 0 1 0-1.414ZM6.037 1.293a1 1 0 0 1 0 1.414l-3.33 3.33a1 1 0 0 1-1.414-1.414l3.33-3.33a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13 13h4M12 7v5"
    />
    <Path fill={fill} d="M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </Svg>
)

