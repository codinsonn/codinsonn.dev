import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <HangerThin/> --------------------------------------------------------------------------- */

export const HangerThin = ({
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
      d="M19.68 20H4.32C3.04 20 2 18.96 2 17.68c0-1 .64-1.89 1.59-2.21l6.46-2.15c.63-.21 1.29-.32 1.95-.32.66 0 1.32.11 1.95.32l6.46 2.15a2.324 2.324 0 0 1-.73 4.53Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9 7c0-1.84 1.64-3.28 3.54-2.95 1.21.21 2.2 1.2 2.41 2.41a3.01 3.01 0 0 1-1.2 2.98c-1.04.75-1.75 1.89-1.75 3.19V13"
    />
  </Svg>
)

