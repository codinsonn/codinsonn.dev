import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <CommuteThin/> -------------------------------------------------------------------------- */

export const CommuteThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path d="M2 3h10.77C17.87 3 22 7.13 22 12.23c0 .42-.34.77-.77.77H2" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 3h10.77C17.87 3 22 7.13 22 12.23c0 .42-.34.77-.77.77H2"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21.73 10H14c-.55 0-1.05-.22-1.41-.59C12.22 9.05 12 8.55 12 8c0-1.1.9-2 2-2h5.59a9.147 9.147 0 0 1 2.14 4Z"
    />
    <Path
      stroke={fill}
      d="M10.5 18c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5-.67-1.5-1.5-1.5Z"
    />
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="M2 21h13" />
    <Path d="M2 13h9L9.12 9.13A2.004 2.004 0 0 0 7.32 8H2" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 13h9L9.12 9.13A2.004 2.004 0 0 0 7.32 8H2"
    />
    <Path d="M2 18h12.23c.78 0 1.26-.85.86-1.51l-1.51-2.51c-.36-.6-1.01-.97-1.71-.97H2" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      d="M2 18h12.23c.78 0 1.26-.85.86-1.51l-1.51-2.51c-.36-.6-1.01-.97-1.71-.97H2"
    />
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="M5 13V8" />
  </Svg>
)
