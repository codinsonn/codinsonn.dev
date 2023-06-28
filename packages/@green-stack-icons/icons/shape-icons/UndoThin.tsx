import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <UndoThin/> ----------------------------------------------------------------------------- */

export const UndoThin = ({
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
      d="M8 9H3V4"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.96 16.04A8.993 8.993 0 0 0 12 21a9 9 0 0 0 9-9c0-3.52-2.02-6.56-4.96-8.04A8.976 8.976 0 0 0 12 3C8.08 3 5.5 5.44 3 9"
    />
  </Svg>
)

