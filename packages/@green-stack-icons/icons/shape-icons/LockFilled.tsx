import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <LockFilled/> --------------------------------------------------------------------------- */

export const LockFilled = ({
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
      d="M12 4c-1.658 0-3 1.342-3 3v6.54H7V7c0-2.762 2.238-5 5-5 1.378 0 2.626.565 3.532 1.458l.01.01A5.025 5.025 0 0 1 17 7v6.54h-2V7c0-.82-.333-1.57-.877-2.123A3.025 3.025 0 0 0 12 4Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="M12 22c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 15.75a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="square"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 17.25v-1.5"
    />
  </Svg>
)

