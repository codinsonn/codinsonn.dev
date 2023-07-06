import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <TrashThin/> ---------------------------------------------------------------------------- */

export const TrashThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M16.56 22H7.44c-.53 0-.97-.41-1-.94L5.5 6h13l-.94 15.06c-.03.53-.47.94-1 .94Z"
      clipRule="evenodd"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M14.5 2h-5v1h5V2Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M19.5 6h-15c-.28 0-.5-.22-.5-.5v-2c0-.28.22-.5.5-.5h15c.28 0 .5.22.5.5v2c0 .28-.22.5-.5.5Z"
      clipRule="evenodd"
    />
  </Svg>
)
