import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <QrCodeFilled/> ------------------------------------------------------------------------- */

export const QrCodeFilled = ({
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
      d="M9 14H4a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1Z"
    />
    <Path stroke={stroke} strokeLinecap="round" d="M7 17H6v1h1v-1Z" />
    <Path
      fill={fill}
      d="M20 3h-5a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1Z"
    />
    <Path stroke={stroke} strokeLinecap="round" d="M18 6h-1v1h1V6Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M5 5h3v3H5V5ZM2 8h3v3H2V8ZM8 8h3v3H8V8ZM2 2h3v3H2V2ZM8 2h3v3H8V2ZM16 16h3v3h-3v-3ZM13 19h3v3h-3v-3ZM19 19h3v3h-3v-3ZM13 13h3v3h-3v-3ZM19 13h3v3h-3v-3Z"
      clipRule="evenodd"
    />
  </Svg>
)

