import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <CardEditThin/> ------------------------------------------------------------------------- */

export const CardEditThin = ({
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
    <Path d="M22 14V8H2v7.5c0 .83.67 1.5 1.5 1.5H12" clipRule="evenodd" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M22 14V8H2v7.5c0 .83.67 1.5 1.5 1.5H12"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M22 8H2V4.5C2 3.67 2.67 3 3.5 3h17c.83 0 1.5.67 1.5 1.5V8Z"
      clipRule="evenodd"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M22 7H2v1h20V7ZM17.84 14.6l-2.48 4.29L15.3 20l.92-.61 2.48-4.29-.86-.5Z"
    />
  </Svg>
)

