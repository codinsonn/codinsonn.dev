import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MotoCyclistFilled/> -------------------------------------------------------------------- */

export const MotoCyclistFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M15 11V6H9v5s-.743 1.165-1 2c-.217.705-.229 2.088-.181 3.109.023.508.45.891.96.891h.554L10 13a1 1 0 0 1 .615-.923 1.5 1.5 0 1 1 2.77 0A1 1 0 0 1 14 13l.667 4h.555c.509 0 .936-.383.96-.891.047-1.02.035-2.404-.182-3.109-.257-.835-1-2-1-2Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.334 17 10 13a1 1 0 0 1 .615-.923 1.5 1.5 0 0 0 2.77 0A1 1 0 0 1 14 13l.667 4"
    />
    <Path
      fill={fill}
      d="M10.615 12.077A1 1 0 0 0 10 13l-1 6a1 1 0 0 0 1 1h1v-1a1 1 0 0 1 2 0v1h1a1 1 0 0 0 1-1l-1-6a1 1 0 0 0-.615-.923 1.5 1.5 0 0 1-2.77 0Z"
    />
    <Path stroke={stroke} strokeLinejoin="round" d="M13 20v-1a1 1 0 1 0-2 0v1" />
    <Path fill={fill} d="M13 21v-2a1 1 0 1 0-2 0v2a1 1 0 1 0 2 0Z" />
    <Path stroke={stroke} strokeLinecap="round" strokeLinejoin="round" d="M9 10h6M8 12h8" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12.45 11a1 1 0 0 1 1-1H20a1 1 0 1 1 0 2h-6.55a1 1 0 0 1-1-1ZM3 11a1 1 0 0 1 1-1h6.55a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Circle cx={12} cy={4} r={2} fill={fill} />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M14 7a1 1 0 0 1 1-1 4 4 0 0 1 4 4v2a1 1 0 1 1-2 0v-2a2 2 0 0 0-2-2 1 1 0 0 1-1-1ZM5 10a4 4 0 0 1 4-4 1 1 0 0 1 0 2 2 2 0 0 0-2 2v2a1 1 0 1 1-2 0v-2Z"
      clipRule="evenodd"
    />
    <Circle
      cx={12}
      cy={11.5}
      r={1.5}
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Circle cx={12} cy={11.5} r={1.5} fill={fill} />
  </Svg>
)
