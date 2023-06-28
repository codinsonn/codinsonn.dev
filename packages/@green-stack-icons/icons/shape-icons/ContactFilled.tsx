import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ContactFilled/> ------------------------------------------------------------------------ */

export const ContactFilled = ({
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
    <Path fill={fill} d="M22 2H4v20h18V2Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M1 11.5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1ZM1 18a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1v-1ZM1 5a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V5Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M18 18H8v-1c0-2.76 2.24-5 5-5s5 2.24 5 5v1Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M18 18H8v-1c0-2.76 2.24-5 5-5s5 2.24 5 5v1Z"
    />
    <Path fill={fill} d="M13 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M13 12a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
    />
  </Svg>
)

