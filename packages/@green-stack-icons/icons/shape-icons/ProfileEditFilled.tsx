import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ProfileEditFilled/> -------------------------------------------------------------------- */

export const ProfileEditFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M20 21c-3.54.8-6.65 1-9 1-3.65 0-6.72-.49-9-1 0-4.42 4.03-8 9-8s9 3.58 9 8ZM11 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="m20.776 1.632 2.589 1.505-3.097 5.357-2.774 1.84.18-3.337 3.102-5.365Z"
      clipRule="evenodd"
    />
  </Svg>
)
