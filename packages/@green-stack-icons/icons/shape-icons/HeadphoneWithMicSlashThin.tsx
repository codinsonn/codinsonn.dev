import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <HeadphoneWithMicSlashThin/> ------------------------------------------------------------ */

export const HeadphoneWithMicSlashThin = ({
  size = 24,
  fill = '#333333',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M11.5 22c4 0 7.5-2 7.5-6"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M11.5 22a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3ZM17 16h1.5a2.5 2.5 0 0 0 2.5-2.5v-2A2.5 2.5 0 0 0 18.5 9H17v7ZM7 16H5.5A2.5 2.5 0 0 1 3 13.5v-2A2.5 2.5 0 0 1 5.5 9H7v7ZM19 9c0-4.5-3-7-7-7S5 4.5 5 9M2 2l20 20"
    />
  </Svg>
)
