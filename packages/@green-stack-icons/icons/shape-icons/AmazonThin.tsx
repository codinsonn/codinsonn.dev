import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <AmazonThin/> --------------------------------------------------------------------------- */

export const AmazonThin = ({
  size = 24,
  fill = '#333333',
  ...svgProps
}: IconProps) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    {...svgProps}
  >
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17.91 16.43c1.39-.37 2.77-.92 4.09-1.65-.03 1.39-.19 2.82-.49 4.26M7.04 5.92c0-1.86 1.81-3.2 4.22-2.86 6.33.89 1.61 9.19 4.06 10.83.28.19 1.27-.32 1.27-.32"
    />
    <Path d="M14.75 8.01c-1.7.64-6.12-.02-7.35 1.49-.9 1.09-.56 3.4.52 4.23 1.25.98 4.57.7 6.63-2.3l-.01.01c.02-1.03.18-2.25.2-3.44" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M14.75 8.01c-1.7.64-6.12-.02-7.35 1.49-.9 1.09-.56 3.4.52 4.23 1.25.98 4.57.7 6.63-2.3l-.01.01c.02-1.03.18-2.25.2-3.44M2 15.41c.46.68 3.46 4.93 8.93 5.52 4.1.44 7.14-1.45 8.06-2.07"
    />
  </Svg>
)

