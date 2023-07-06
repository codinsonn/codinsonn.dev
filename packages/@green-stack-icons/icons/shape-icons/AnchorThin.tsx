import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <AnchorThin/> --------------------------------------------------------------------------- */

export const AnchorThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="M12 7v13M9 11h6" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      d="M4.11 13.35A7.999 7.999 0 0 0 12 20c3.96 0 7.25-2.87 7.89-6.65"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      d="M13.32 19.89c-.87.17-1.77.16-2.64-.01l-.67-.13.01.01L12 22l1.98-2.24-.66.13ZM20 12l-1.28 1.38s1.13-.29 2 .27L20 12ZM4 12l1.28 1.38s-1.13-.29-2 .27L4 12Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 7a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
  </Svg>
)
