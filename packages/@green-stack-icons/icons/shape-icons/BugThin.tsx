import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <BugThin/> ------------------------------------------------------------------------------ */

export const BugThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m17.23 2-2.6 2.61M9.37 4.61 6.77 2M18 12.98h4M2 12.98h4M20.71 6.44l-3 1.73M20.65 19.72l-3-1.72M6.29 8.17l-3-1.73M6.35 18l-3 1.72M12 4c3.31 0 6 2.69 6 6v6c0 3.31-2.69 6-6 6s-6-2.69-6-6v-6c0-3.31 2.69-6 6-6Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 4C9.32 4 7.04 5.77 6.28 8.19c3.46 2.42 8.12 2.4 11.44.01A5.994 5.994 0 0 0 12 4Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m10.25 13.5 3.5 3.5M13.75 13.5l-3.5 3.5"
    />
  </Svg>
)
