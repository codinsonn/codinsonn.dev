import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Scooter8Filled/> ----------------------------------------------------------------------- */

export const Scooter8Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M9.879 7.121 8 9l-1 7 3 2V9l.658-1.316a3.01 3.01 0 0 1-.78-.563ZM13.342 7.684 14 9v9l3-2-1-7-1.879-1.879c-.227.227-.49.418-.78.563Z"
    />
    <Path
      fill={fill}
      d="m10 9 .658-1.316c.404.202.86.316 1.342.316.482 0 .938-.114 1.342-.316L14 9v9h-1v-3a1 1 0 1 0-2 0v3h-1V9Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M6 5a1 1 0 0 1 1-1h2a1 1 0 0 1 0 2H7a1 1 0 0 1-1-1Zm8 0a1 1 0 0 1 1-1h2a1 1 0 1 1 0 2h-2a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4ZM16 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-3a1 1 0 0 1-1-1V4Z"
      clipRule="evenodd"
    />
    <Path stroke={stroke} strokeLinejoin="round" d="M13 18v-3a1 1 0 1 0-2 0v3" />
    <Path fill={fill} d="M13 21v-6a1 1 0 1 0-2 0v6a1 1 0 1 0 2 0Z" />
    <Circle cx={12} cy={5} r={3} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    <Circle cx={12} cy={5} r={3} fill={fill} />
  </Svg>
)
