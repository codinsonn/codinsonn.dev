import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ProfileUnsuccessFilled/> --------------------------------------------------------------- */

export const ProfileUnsuccessFilled = ({
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
      d="m21.293 6.947-4.24-4.24 1.414-1.414 4.24 4.24-1.414 1.414Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="m17.053 5.533 4.24-4.24 1.414 1.414-4.24 4.24-1.414-1.414Z"
      clipRule="evenodd"
    />
  </Svg>
)

