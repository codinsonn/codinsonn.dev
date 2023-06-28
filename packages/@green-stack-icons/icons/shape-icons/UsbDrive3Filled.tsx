import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <UsbDrive3Filled/> ---------------------------------------------------------------------- */

export const UsbDrive3Filled = ({
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
      d="M5 8h14v7a7 7 0 1 1-14 0V8Z"
      clipRule="evenodd"
    />
    <Path stroke={stroke} d="M5 8h14" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m9 15 2.5 2 3.5-5"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M6 2h12v6H6V2Z"
      clipRule="evenodd"
    />
    <Path stroke={stroke} d="M9 5h2M13 5h2" />
  </Svg>
)

