import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Attachment2Filled/> -------------------------------------------------------------------- */

export const Attachment2Filled = ({
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
      fill={fill}
      fillRule="evenodd"
      d="M15.537 5.633a1 1 0 0 1 0 1.414l-8.49 8.49a3.008 3.008 0 0 0 .001 4.247 3.008 3.008 0 0 0 4.246-.002l.001-.001 8.488-8.488a1 1 0 0 1 1.414 1.414l-8.49 8.49-.002.002a5.008 5.008 0 0 1-7.072-.002l-.002-.002a5.008 5.008 0 0 1 .002-7.072l8.49-8.49a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M11.295 2.8a5.008 5.008 0 0 1 7.072.003l.002.002a5.008 5.008 0 0 1-.002 7.072l-8.49 8.49a1 1 0 1 1-1.414-1.414l8.49-8.49a3.008 3.008 0 0 0-.001-4.247 3.008 3.008 0 0 0-4.246.002l-.001.001-8.488 8.488a1 1 0 1 1-1.414-1.414l8.49-8.49.002-.002Z"
      clipRule="evenodd"
    />
  </Svg>
)

