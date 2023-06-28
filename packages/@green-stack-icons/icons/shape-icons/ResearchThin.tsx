import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ResearchThin/> ------------------------------------------------------------------------- */

export const ResearchThin = ({
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
      d="M4 20v-6M8 20V9M12 20v-8M16 20v-3M20 20v-8"
    />
    <Circle
      r={1}
      stroke={fill}
      strokeLinecap="round"
      transform="matrix(-1 0 0 1 4 10)"
    />
    <Circle
      r={1}
      stroke={fill}
      strokeLinecap="round"
      transform="matrix(-1 0 0 1 8 5)"
    />
    <Circle
      r={1}
      stroke={fill}
      strokeLinecap="round"
      transform="matrix(-1 0 0 1 12 8)"
    />
    <Circle
      r={1}
      stroke={fill}
      strokeLinecap="round"
      transform="matrix(-1 0 0 1 20 8)"
    />
    <Circle
      r={1}
      stroke={fill}
      strokeLinecap="round"
      transform="matrix(-1 0 0 1 16 13)"
    />
  </Svg>
)

