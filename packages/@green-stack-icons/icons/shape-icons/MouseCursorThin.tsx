import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MouseCursorThin/> ---------------------------------------------------------------------- */

export const MouseCursorThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="m17.06 12.23-11.6-9.2-.4 14.8 3.78-2.98 2.61 5.61c.23.5.83.72 1.33.48l1.69-.79c.5-.23.72-.83.48-1.33l-2.61-5.61 4.72-.98Z"
      clipRule="evenodd"
    />
  </Svg>
)
