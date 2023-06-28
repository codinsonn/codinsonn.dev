import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <RoundedDFilled/> ----------------------------------------------------------------------- */

export const RoundedDFilled = ({
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
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <Path
      fill={fill}
      d="M12.3 17.4H7.8V6.6h4.5c2.8 0 5.1 2.3 5.1 5.1v.7c0 2.7-2.3 5-5.1 5Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12.3 17.4H7.8V6.6h4.5c2.8 0 5.1 2.3 5.1 5.1v.7c0 2.7-2.3 5-5.1 5Z"
    />
  </Svg>
)

