import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <MailFilled/> --------------------------------------------------------------------------- */

export const MailFilled = ({
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
      d="M20 20H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2Z"
    />
    <Path
      fill={fill}
      d="M20 4H4c-1.1 0-2 .9-2 2l10 7 10-7c0-1.1-.9-2-2-2Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="m2 6 10 7 10-7"
    />
  </Svg>
)

