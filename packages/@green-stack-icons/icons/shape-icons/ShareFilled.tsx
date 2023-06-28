import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ShareFilled/> -------------------------------------------------------------------------- */

export const ShareFilled = ({
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
      fill={fill}
      fillRule="evenodd"
      d="m15.86 7.633-6.703 3.956L8.14 9.867l6.703-3.957 1.017 1.723ZM9.157 12.41l6.703 3.957-1.017 1.723-6.703-3.957 1.017-1.722Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="M17.5 9a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM17.5 22a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM6.5 15.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"
    />
  </Svg>
)

