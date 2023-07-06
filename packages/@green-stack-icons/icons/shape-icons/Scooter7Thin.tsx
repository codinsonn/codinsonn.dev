import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Scooter7Thin/> ------------------------------------------------------------------------- */

export const Scooter7Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path d="M6.993 16.832 8 17h5c3 0 5-4 5-4v-2.5L15 13h-4.72a1 1 0 0 1-.97-1.242l.38-1.515A1 1 0 0 0 8.72 9H4.526a.944.944 0 0 0-.844 1.366c.188.375.104.83-.177 1.143-.347.388-.788.947-1.006 1.491-.39.976-.5 3-.5 3l1.169.195 3.824.637Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18 10.5V13s-2 4-5 4H8l-1.007-.168-3.824-.637L2 16s.11-2.024.5-3c.218-.544.659-1.103 1.006-1.491.28-.313.365-.768.177-1.143A.944.944 0 0 1 4.527 9h4.192a1 1 0 0 1 .97 1.242l-.378 1.515A1 1 0 0 0 10.28 13H15l3-2.5Zm0 0L16 6h-3"
    />
    <Path stroke={fill} strokeLinecap="round" d="m18.582 15.582-1.348-1.348" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m3.169 16.195 3.824.637a2 2 0 1 1-3.824-.637Z"
    />
    <Circle cx={20} cy={17} r={2} stroke={fill} />
    <Path stroke={fill} strokeLinecap="round" d="M9.5 11H3.8" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 6a1 1 0 0 1 1-1h1v2h-1a1 1 0 0 1-1-1Z"
    />
    <Path stroke={fill} d="M16 6h1" />
  </Svg>
)
