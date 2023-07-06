import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MeetupFilled/> ------------------------------------------------------------------------- */

export const MeetupFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M21.14 14.26c.29-.47.46-1.03.46-1.62 0-1.27-.75-2.36-1.82-2.83.31-.7.5-1.47.5-2.29 0-3.05-2.4-5.52-5.37-5.52-1.55 0-2.94.69-3.92 1.78-.55-.68-1.37-1.13-2.3-1.13-1.66 0-3 1.38-3 3.08 0 .02.01.04.01.05C3.62 6.05 2 7.85 2 10.06c0 1.19.47 2.27 1.22 3.05-.24.54-.38 1.14-.38 1.77 0 2.39 1.89 4.33 4.22 4.33.64 0 1.25-.16 1.79-.43.49 1.86 2.11 3.22 4.06 3.22 1.98 0 3.63-1.41 4.08-3.31.53.5 1.23.81 2.01.81 1.66 0 3-1.38 3-3.08 0-.84-.33-1.6-.86-2.16Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m7.91 7.85-1.18 6.06M7.63 9.31s1.78-2.14 3.28-1.1l-1.17 5.7M10.56 9.93s.87-2.45 2.68-2.04c1.71.39-2.09 7.37.12 8.08s3.91-.81 3.91-.81"
    />
  </Svg>
)
