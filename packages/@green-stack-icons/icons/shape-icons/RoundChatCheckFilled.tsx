import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <RoundChatCheckFilled/> ----------------------------------------------------------------- */

export const RoundChatCheckFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M14.5 2h-5C5.36 2 2 5.36 2 9.5c0 3.26 2.09 6.03 5 7.06V22l5-5h2.5c4.14 0 7.5-3.36 7.5-7.5C22 5.36 18.64 2 14.5 2Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m8.25 9.5 2.5 2.5 5-5"
    />
  </Svg>
)
