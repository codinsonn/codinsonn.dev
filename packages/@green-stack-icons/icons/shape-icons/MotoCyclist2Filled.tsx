import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MotoCyclist2Filled/> ------------------------------------------------------------------- */

export const MotoCyclist2Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M14 10a1 1 0 0 1 1-1h2a1 1 0 0 1 .928.629l2 5a1 1 0 0 1-1.857.742L16.323 11H15a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M17.29 10.55a1 1 0 0 1 1.239.579l.6 1.5a1 1 0 0 1-.37 1.2l-5.2 3.5A1 1 0 0 1 13 17.5h-3a1 1 0 1 1 0-2h2V13a1 1 0 0 1 .69-.95l4.6-1.5ZM14 14.621v-.896l2.582-.842L14 14.622Z"
      clipRule="evenodd"
    />
    <Circle cx={19} cy={18} r={3} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    <Circle cx={19} cy={18} r={3} fill={fill} />
    <Circle cx={5} cy={18} r={3} stroke={stroke} strokeLinecap="round" strokeLinejoin="round" />
    <Circle cx={5} cy={18} r={3} fill={fill} />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="m2 13-.217-.976a1 1 0 0 0 .434 1.952h.003l.02-.005.086-.017a14.56 14.56 0 0 1 1.507-.207c.965-.081 2.049-.066 2.85.202.784.26 1.373.75 1.767 1.276.413.55.55 1.053.55 1.275a1 1 0 0 0 2 0c0-.778-.363-1.693-.95-2.475a5.653 5.653 0 0 0-2.734-1.974c-1.198-.4-2.614-.384-3.649-.298a16.535 16.535 0 0 0-1.838.261l-.032.007-.009.002h-.005L2 13Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="M8.447 5.606a1 1 0 0 0-1.341.447l-2 4a1 1 0 0 0 .447 1.341l.944.472L9 13.536V18a1 1 0 1 0 2 0v-5a1 1 0 0 0-.445-.832l-2.266-1.51.985-1.97 1.02 1.02A1 1 0 0 0 11 10h3a1 1 0 1 0 0-2h-2.586l-1.69-1.69a.998.998 0 0 0-.277-.204l-1-.5Z"
    />
    <Path fill={fill} fillRule="evenodd" d="M7 4a2 2 0 1 1 4 0 2 2 0 0 1-4 0Z" clipRule="evenodd" />
  </Svg>
)
