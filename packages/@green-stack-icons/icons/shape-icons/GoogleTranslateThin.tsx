import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <GoogleTranslateThin/> ------------------------------------------------------------------ */

export const GoogleTranslateThin = ({
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
      d="M12.5 18h7m-7 0L11 21m1.5-3 3.5-7 3.5 7m0 0 1.5 3M3 5h12M9 3v2m1.05 9.5A18.117 18.117 0 0 1 6.41 9m6.34-4C11.78 10.77 8.07 15.61 3 18.13"
    />
  </Svg>
)

