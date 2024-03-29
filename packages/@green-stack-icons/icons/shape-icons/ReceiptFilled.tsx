import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ReceiptFilled/> ------------------------------------------------------------------------ */

export const ReceiptFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} d="M20 22V2H4v20l2-2 2 2 2-2 2 2 2-2 2 2 2-2 2 2Z" />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      d="M7 16h10M7 12h5M7 6h5M14 6h3M14 9h3M14 12h3M7 9h5"
    />
  </Svg>
)
