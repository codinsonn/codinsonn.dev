import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <GiftThin/> ----------------------------------------------------------------------------- */

export const GiftThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 22H5c-.55 0-1-.45-1-1v-9h16v9c0 .55-.45 1-1 1ZM21 12H3c-.55 0-1-.45-1-1V9c0-.55.45-1 1-1h18c.55 0 1 .45 1 1v2c0 .55-.45 1-1 1ZM12 8c1.81-.01 3.23-.36 4.13-.66 1.16-.38 2.15-.87 2.98-1.64.39-.36.72-.78.84-1.27.13-.55-.03-1.14-.4-1.58-.37-.44-.93-.73-1.53-.82-.48-.07-.99-.02-1.41.21-.36.2-.64.51-.86.84-.47.71-.69 1.52-1.09 2.26-.54 1-1.35 1.64-1.79 2-.33.29-.64.51-.87.66Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 8c-1.81-.01-3.23-.36-4.13-.66-1.16-.37-2.16-.87-2.98-1.63-.39-.36-.73-.78-.84-1.27-.14-.55.02-1.14.39-1.59.37-.44.93-.73 1.53-.82.48-.07.99-.02 1.41.21.36.2.64.51.86.84.47.71.69 1.52 1.09 2.26.54 1 1.35 1.64 1.79 2 .34.29.65.51.88.66Z"
    />
    <Path stroke={fill} strokeLinecap="square" strokeLinejoin="round" d="M12 8v14" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      d="M12 7c.28 0 .5.22.5.5V8h-1v-.5c0-.28.22-.5.5-.5Z"
    />
  </Svg>
)
