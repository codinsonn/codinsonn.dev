import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <UsbCable3Thin/> ------------------------------------------------------------------------ */

export const UsbCable3Thin = ({
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
      d="M16 2H8v6h8V2Z"
    />
    <Path d="M10 22v-4.6c0-.3-.1-.5-.3-.7l-3.4-3.4c-.2-.2-.3-.4-.3-.7V8h12v4.6c0 .3-.1.5-.3.7l-3.4 3.4c-.2.2-.3.4-.3.7V22" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 22v-4.6c0-.3-.1-.5-.3-.7l-3.4-3.4c-.2-.2-.3-.4-.3-.7V8h12v4.6c0 .3-.1.5-.3.7l-3.4 3.4c-.2.2-.3.4-.3.7V22"
    />
  </Svg>
)

