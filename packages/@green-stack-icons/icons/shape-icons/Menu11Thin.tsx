import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Menu11Thin/> --------------------------------------------------------------------------- */

export const Menu11Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M4 15.5c0-.28.22-.5.5-.5h15c.28 0 .5.22.5.5s-.22.5-.5.5h-15c-.28 0-.5-.22-.5-.5ZM4 8.5c0-.28.22-.5.5-.5h15c.28 0 .5.22.5.5s-.22.5-.5.5h-15c-.28 0-.5-.22-.5-.5Z"
    />
  </Svg>
)
