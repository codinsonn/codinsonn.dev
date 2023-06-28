import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <CardThin/> ----------------------------------------------------------------------------- */

export const CardThin = ({
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
      d="M20.5 19h-17c-.83 0-1.5-.67-1.5-1.5V10h20v7.5c0 .83-.67 1.5-1.5 1.5ZM22 10H2V6.5C2 5.67 2.67 5 3.5 5h17c.83 0 1.5.67 1.5 1.5V10Z"
      clipRule="evenodd"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M22 9H2v1h20V9Z"
    />
  </Svg>
)

