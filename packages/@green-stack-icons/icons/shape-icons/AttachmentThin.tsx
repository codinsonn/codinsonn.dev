import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <AttachmentThin/> ----------------------------------------------------------------------- */

export const AttachmentThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M13.99 5.79V16.1a1.9 1.9 0 0 1-1.9 1.9c-1.15 0-2.09-.94-2.09-2.09V7"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M6 15V6c0-2.2 1.8-4 4-4 2.13 0 3.99 1.79 3.99 3.91L14 15"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M18 9v7c0 3.3-2.7 6-6 6s-6-2.7-6-6v-6"
    />
  </Svg>
)
