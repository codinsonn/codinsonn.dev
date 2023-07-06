import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <TelevisionThin/> ----------------------------------------------------------------------- */

export const TelevisionThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M18.5 21h-13c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h13c.28 0 .5.22.5.5s-.22.5-.5.5ZM8 16v4M16 16v4M21.5 16h-19c-.28 0-.5-.22-.5-.5v-12c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5v12c0 .28-.22.5-.5.5Z"
    />
  </Svg>
)
