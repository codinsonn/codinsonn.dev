import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <CardQuestionThin/> --------------------------------------------------------------------- */

export const CardQuestionThin = ({
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
      d="M22 7H2v1h20V7Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 21h.01M15 15.04c.04-.29.16-.83.56-1.31.1-.13.29-.36.62-.53.4-.2.76-.2.92-.2.18 0 .61.02 1.05.31.54.36.71.88.76 1.04.03.08.19.61 0 1.21-.11.38-.31.62-.48.83-.7.83-1.32.76-1.43 1.3-.01.02 0 .13 0 .31"
    />
  </Svg>
)

