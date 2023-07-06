import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <LaptopThin/> --------------------------------------------------------------------------- */

export const LaptopThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M19.5 17h-15c-.28 0-.5-.22-.5-.5v-10c0-.28.22-.5.5-.5h15c.28 0 .5.22.5.5v10c0 .28-.22.5-.5.5ZM2 18h20"
    />
  </Svg>
)
