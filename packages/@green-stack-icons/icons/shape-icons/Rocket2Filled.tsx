import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Rocket2Filled/> ------------------------------------------------------------------------ */

export const Rocket2Filled = ({
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
      d="M14.51 17.36c-5.55 2.03-5.55 2.03-7.73-.15-2.17-2.17-2.17-2.17-.15-7.73 2.19-2.19 5.82-4.75 9-6.23 2.58-1.21 4.87-1.71 5.85-.74 2.18 2.18-2.99 10.87-6.97 14.85Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M6.083 17.917c-.985-.985-2.491-.975-3.376-.09a1 1 0 0 1-1.414-1.414c1.715-1.715 4.489-1.625 6.204.09 1.715 1.715 1.805 4.489.09 6.204a1 1 0 0 1-1.414-1.414c.885-.885.895-2.391-.09-3.376Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M5.077 18.923a1 1 0 0 1 0 1.414l-1.87 1.87a1 1 0 0 1-1.414-1.414l1.87-1.87a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M14.14 12.47c-.72.72-1.89.72-2.61 0s-.72-1.89 0-2.61 1.89-.72 2.61 0 .72 1.89 0 2.61Z"
    />
    <Path
      fill={fill}
      d="M14.14 12.47c-.72.72-1.89.72-2.61 0s-.72-1.89 0-2.61 1.89-.72 2.61 0 .72 1.89 0 2.61Z"
    />
  </Svg>
)

