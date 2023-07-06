import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <PhoneRightSlashFilled/> ---------------------------------------------------------------- */

export const PhoneRightSlashFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M11.604 13.726 9.66 15.67l-2.12-2.12L3 18.09l2.12 2.12c1.782 1.782 6.076.441 9.985-2.984l-3.5-3.5Zm5.622 1.379c3.425-3.909 4.766-8.203 2.984-9.985L18.09 3l-4.54 4.54 2.12 2.12-1.944 1.944 3.5 3.5ZM2.47 2.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
)
