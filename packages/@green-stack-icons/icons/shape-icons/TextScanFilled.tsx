import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <TextScanFilled/> ----------------------------------------------------------------------- */

export const TextScanFilled = ({
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
      fill={fill}
      fillRule="evenodd"
      d="M16 2a1 1 0 0 1 1-1h5a1 1 0 0 1 1 1v5a1 1 0 1 1-2 0V3h-4a1 1 0 0 1-1-1ZM22 16a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1h-5a1 1 0 0 1 0-2h4v-4a1 1 0 0 1 1-1ZM1 2a1 1 0 0 1 1-1h5a1 1 0 1 1 0 2H3v4a1 1 0 1 1-2 0V2ZM2 16a1 1 0 0 1 1 1v4h4a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1ZM12 5a1 1 0 0 1 .923.615l5 12a1 1 0 0 1-1.846.77L14.25 14h-4.5l-1.827 4.385a1 1 0 0 1-1.846-.77l5-12A1 1 0 0 1 12 5Zm-1.417 7h2.834L12 8.6 10.583 12Z"
      clipRule="evenodd"
    />
  </Svg>
)

