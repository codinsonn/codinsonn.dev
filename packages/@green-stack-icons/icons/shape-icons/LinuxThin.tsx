import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <LinuxThin/> ---------------------------------------------------------------------------- */

export const LinuxThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.164 8.61s-3.03 4.38-2.72 6.77h.01c1.1.19 4.43 4.66 3.62 6.03h5.85c-.82-1.37 2.51-5.84 3.61-6.03.07-1.21-.94-3.38-2.81-4.61-.72-.48-1.23-2.65-1.23-2.65.34-.67.54-1.38.54-2.05 0-2.25-1.62-4.07-3.62-4.07s-3.62 1.82-3.62 4.07c0 .83.12 1.73.37 2.54Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.034 6.07c0 2.25-2.34 5.07-4.34 5.07s-2.91-2.82-2.91-5.07c0-2.25 1.63-4.07 3.63-4.07s3.62 1.82 3.62 4.07Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.014 11.02s-2.17 1.99-1.67 3.59c.5 1.6 3.35 2.31 3.21 3.3-.15.99-2.55 2-2.55 2"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.054 21.44c-.89 1.35-4.99-.1-6.49-.56-1.06-.33-.42-1.65.25-1.68 0 0-1.38-1.46-.49-2.24.88-.78 1.38.07 1.87-.14.49-.21.17-1.63 1.28-1.44 1.09.19 4.46 4.72 3.58 6.06ZM14.934 21.44c.88 1.35 4.99-.1 6.49-.56 1.06-.33.42-1.65-.25-1.68 0 0 1.38-1.46.49-2.24-.89-.78-1.38.07-1.87-.14-.49-.21-.17-1.63-1.28-1.44-1.09.19-4.46 4.72-3.58 6.06Z"
    />
    <Path d="M13.834 9.18s-.78-2.15-2.69-2.12c-1.55.02-2.9 1.77-2.9 1.77.45 1.3 1.26 2.31 2.46 2.31 1.09 0 2.28-.84 3.13-1.96v-.01.01Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M13.834 9.18s-.78-2.15-2.69-2.12c-1.55.02-2.9 1.77-2.9 1.77.45 1.3 1.26 2.31 2.46 2.31 1.09 0 2.28-.84 3.13-1.96Z"
      clipRule="evenodd"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.304 7.04c.07-.27.11-.55.11-.85 0-1.37-.81-2.47-1.81-2.47s-1.81 1.1-1.81 2.46M11.524 7.04c-.07-.27-.11-.55-.11-.85 0-1.37.81-2.47 1.81-2.47s1.81 1.11 1.81 2.47M12.624 10.39s3.22 4.26 3.32 7.65"
    />
  </Svg>
)
