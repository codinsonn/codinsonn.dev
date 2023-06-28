import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <KeyboardLightThin/> -------------------------------------------------------------------- */

export const KeyboardLightThin = ({
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
      d="M16 18H8"
    />
    <Path
      stroke={fill}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M22 18h-2 2ZM4 18H2h2ZM12 7v1-1Zm0 0V6v1ZM4.19 10.222l.708.707-.707-.707Zm0 0ZM20.485 9.484l-.707.707-.707.707.707-.707.707-.707Z"
    />
  </Svg>
)

