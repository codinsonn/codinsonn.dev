import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <AirplayFilled/> ------------------------------------------------------------------------ */

export const AirplayFilled = ({
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
      d="M1 12C1 5.928 5.928 1 12 1s11 4.928 11 11c0 3.83-1.961 7.184-4.902 9.16a1 1 0 0 1-.558.17h-.01a1 1 0 0 1-.47-1.883C19.436 17.817 21 15.095 21 12c0-4.968-4.032-9-9-9s-9 4.032-9 9c0 3.095 1.565 5.816 3.94 7.447a1 1 0 0 1-.47 1.883h-.01a1 1 0 0 1-.558-.17C2.961 19.184 1 15.83 1 12Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M4.5 12a7.5 7.5 0 1 1 15 0 7.5 7.5 0 0 1-3.806 6.53 1 1 0 1 1-.988-1.74 5.5 5.5 0 1 0-5.412 0 1 1 0 1 1-.988 1.74A7.5 7.5 0 0 1 4.5 12Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M8 12c0-2.212 1.788-4 4-4 2.212 0 4 1.788 4 4a3.985 3.985 0 0 1-2.963 3.857 1 1 0 0 1-1.037-.34 1 1 0 0 1-1.037.34A3.985 3.985 0 0 1 8 12Zm4 2.264a.996.996 0 0 1 .523-.34A1.985 1.985 0 0 0 14 12c0-1.108-.892-2-2-2s-2 .892-2 2c0 .925.623 1.697 1.477 1.924.214.056.394.18.523.34Z"
      clipRule="evenodd"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M5 22h14l-7-8-7 8Z"
    />
    <Path fill={fill} d="M5 22h14l-7-8-7 8Z" />
  </Svg>
)

