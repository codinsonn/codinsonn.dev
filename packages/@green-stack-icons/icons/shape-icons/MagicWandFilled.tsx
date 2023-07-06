import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MagicWandFilled/> ---------------------------------------------------------------------- */

export const MagicWandFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="m10.604 10.87 2.526 2.526L4.526 22 2 19.474l8.604-8.604ZM21.41 2.59l-.68 2.01L22 6.3l-2.12-.03L18.65 8l-.62-2.03L16 5.35l1.73-1.23L17.7 2l1.7 1.27 2.01-.68Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M11.743 2.03a1 1 0 0 1 .727 1.212l-1 4a1 1 0 0 1-1.94-.485l1-4a1 1 0 0 1 1.213-.727Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M8.03 4.257a1 1 0 0 1 1.213-.727l4 1a1 1 0 0 1-.485 1.94l-4-1a1 1 0 0 1-.728-1.213ZM21.97 12.258a1 1 0 0 1-.727 1.212l-4 1a1 1 0 0 1-.485-1.94l4-1a1 1 0 0 1 1.212.728Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M18.258 10.03a1 1 0 0 1 1.212.728l1 4a1 1 0 0 1-1.94.485l-1-4a1 1 0 0 1 .728-1.213Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m10.606 10.872 2.525 2.526"
    />
    <Path fill={fill} d="m13.478 8-2.872 2.872 2.525 2.526 2.872-2.873L13.478 8Z" />
  </Svg>
)
