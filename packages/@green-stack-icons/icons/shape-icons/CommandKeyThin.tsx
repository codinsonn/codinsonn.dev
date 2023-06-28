import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <CommandKeyThin/> ----------------------------------------------------------------------- */

export const CommandKeyThin = ({
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
      d="M16 8H8v8h8V8ZM8 8H5C3.34 8 2 6.66 2 5s1.34-3 3-3 3 1.34 3 3v3ZM16 8h3c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3v3ZM8 16H5c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3v-3ZM16 16h3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3v-3Z"
    />
  </Svg>
)

