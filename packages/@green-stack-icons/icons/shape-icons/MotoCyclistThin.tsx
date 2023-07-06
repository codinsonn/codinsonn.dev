import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MotoCyclistThin/> ---------------------------------------------------------------------- */

export const MotoCyclistThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 11V7H9v4s-.743 1.165-1 2c-.217.705-.229 2.088-.181 3.109.023.508.45.891.96.891h.554L10 13a1 1 0 0 1 .615-.923 1.5 1.5 0 1 1 2.77 0A1 1 0 0 1 14 13l.667 4h.555c.509 0 .936-.383.96-.891.047-1.02.035-2.404-.182-3.109-.257-.835-1-2-1-2ZM13 21v-2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0Z"
    />
    <Circle cx={12} cy={11.5} r={1.5} stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.615 12.077A1 1 0 0 0 10 13l-1 6a1 1 0 0 0 1 1h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 0 1-1l-1-6a1 1 0 0 0-.615-.923 1.5 1.5 0 0 1-2.77 0ZM13.45 11H20M10.55 11H4"
    />
    <Circle cx={12} cy={4} r={2} stroke={fill} />
    <Path stroke={fill} strokeLinecap="round" d="M15 7v0a3 3 0 0 1 3 3v2M6 12v-2a3 3 0 0 1 3-3" />
  </Svg>
)
