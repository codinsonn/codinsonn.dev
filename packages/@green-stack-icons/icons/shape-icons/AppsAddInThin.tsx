import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <AppsAddInThin/> ------------------------------------------------------------------------ */

export const AppsAddInThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 12H3V5c0-1.1.9-2 2-2h7v9ZM12 21H5c-1.1 0-2-.9-2-2v-7h9v9ZM19 21h-7v-9h9v7c0 1.1-.9 2-2 2ZM18 3v6M15 6h6"
    />
  </Svg>
)
