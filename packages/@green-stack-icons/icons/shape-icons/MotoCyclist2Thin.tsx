import * as React from 'react'
import Svg, { Circle, Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MotoCyclist2Thin/> --------------------------------------------------------------------- */

export const MotoCyclist2Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Circle cx={19} cy={18} r={3} stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <Circle cx={5} cy={18} r={3} stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M2 13s3-.667 5 0 3 2.5 3 3.5"
    />
    <Path d="M18.2 13 13 16.5V13l4.6-1.5.6 1.5Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10 16.5h3m0 0 5.2-3.5-.6-1.5L13 13v3.5ZM10 18v-5l-3-2 2-4 2 2h3"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 6.5 9 7l-2 4-1-.5 2-4Z"
    />
    <Circle cx={9} cy={4} r={1} stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="m19 15-2-5h-2" />
  </Svg>
)
