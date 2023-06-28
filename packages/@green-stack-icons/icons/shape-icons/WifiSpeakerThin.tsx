import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <WifiSpeakerThin/> ---------------------------------------------------------------------- */

export const WifiSpeakerThin = ({
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
    <Path d="M13 17v5H2V2h11v5" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M13 17v5H2V2h11v5"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M7.5 9C8.33 9 9 8.33 9 7.5S8.33 6 7.5 6 6 6.67 6 7.5 6.67 9 7.5 9ZM7.5 19a2.5 2.5 0 0 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14 13.5c.31-.42.5-.94.5-1.5s-.19-1.08-.5-1.5M16.88 16c.78-1.11 1.25-2.5 1.25-4s-.47-2.89-1.25-4M19.5 19c1.56-1.87 2.5-4.32 2.5-7 0-2.68-.94-5.13-2.5-7"
    />
  </Svg>
)

