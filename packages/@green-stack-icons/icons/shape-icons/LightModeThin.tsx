import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <LightModeThin/> ------------------------------------------------------------------------ */

export const LightModeThin = ({
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
      d="M22 12h-3M5 12H2M12 22v-3M12 5V2M19.07 19.07l-2.12-2.12M7.05 7.05 4.93 4.93M7.05 16.95l-2.12 2.12M19.07 4.93l-2.12 2.12M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </Svg>
)

