import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <MapPinThin/> --------------------------------------------------------------------------- */

export const MapPinThin = ({
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
      d="M11 10h2v6l-1 3-1-3v-6Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8 16.312c-2.963.49-5 1.51-5 2.688 0 1.657 4.03 3 9 3s9-1.343 9-3c0-1.178-2.037-2.197-5-2.688"
    />
    <Circle cx={12} cy={6} r={4} stroke={fill} />
  </Svg>
)

