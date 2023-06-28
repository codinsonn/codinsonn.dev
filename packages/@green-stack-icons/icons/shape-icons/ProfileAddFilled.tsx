import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ProfileAddFilled/> --------------------------------------------------------------------- */

export const ProfileAddFilled = ({
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
      d="M20 21c-3.54.8-6.65 1-9 1-3.65 0-6.72-.49-9-1 0-4.42 4.03-8 9-8s9 3.58 9 8ZM11 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M23 5h-6V3h6v2Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M19 7V1h2v6h-2Z"
      clipRule="evenodd"
    />
  </Svg>
)

