import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <RocketThin/> --------------------------------------------------------------------------- */

export const RocketThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path stroke={fill} d="M6 19h12c0-9.697-6-16-6-16S6 9.303 6 19Z" />
    <Path stroke={fill} strokeLinecap="round" d="M12 18v3" />
    <Path d="M17.87 16.5c.084.794.13 1.652.13 2.5 1.5 0 3 2 3 2s-.02-1.27-.3-2c-.44-1.146-1.482-2.306-2.83-2.5ZM6.13 16.5c-1.37.176-2.376 1.319-2.83 2.5-.28.73-.3 2-.3 2s1.5-2 3-2c0-.852.046-1.702.13-2.5Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.87 16.5c.084.794.13 1.652.13 2.5 1.5 0 3 2 3 2s-.02-1.27-.3-2c-.44-1.146-1.482-2.306-2.83-2.5ZM6.13 16.5c-1.37.176-2.376 1.319-2.83 2.5-.28.73-.3 2-.3 2s1.5-2 3-2c0-.852.046-1.702.13-2.5Z"
      clipRule="evenodd"
    />
    <Path stroke={fill} d="M12.124 15a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z" />
    <Path
      stroke={fill}
      d="M14.84 7.07c-.17.137-.42.321-.785.486-.472.213-1.137.394-2.066.394-.928 0-1.588-.18-2.055-.394a3.418 3.418 0 0 1-.773-.486C10.605 4.465 12 3 12 3s1.394 1.465 2.838 4.07Z"
      clipRule="evenodd"
    />
  </Svg>
)
