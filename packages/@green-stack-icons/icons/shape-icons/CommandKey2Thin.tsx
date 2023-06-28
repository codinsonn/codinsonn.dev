import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <CommandKey2Thin/> ---------------------------------------------------------------------- */

export const CommandKey2Thin = ({
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
      strokeMiterlimit={10}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="M14 10h-4v4h4v-4ZM10 10H8.5C7.67 10 7 9.33 7 8.5S7.67 7 8.5 7s1.5.67 1.5 1.5V10ZM14 10h1.5c.83 0 1.5-.67 1.5-1.5S16.33 7 15.5 7 14 7.67 14 8.5V10ZM10 14H8.5c-.83 0-1.5.67-1.5 1.5S7.67 17 8.5 17s1.5-.67 1.5-1.5V14ZM14 14h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5-1.5-.67-1.5-1.5V14Z"
    />
  </Svg>
)

