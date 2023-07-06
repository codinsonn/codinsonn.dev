import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <File2Thin/> ---------------------------------------------------------------------------- */

export const File2Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17.29 2.29 21.7 6.7c.19.19.3.45.3.71V21c0 .55-.45 1-1 1H3c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h13.59c.26 0 .52.11.7.29ZM7 17h10M7 12h10M7 7h5"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M16 2v6h6v-.59c0-.26-.11-.52-.29-.7l-4.42-4.42c-.18-.18-.44-.29-.7-.29H16Z"
    />
  </Svg>
)
