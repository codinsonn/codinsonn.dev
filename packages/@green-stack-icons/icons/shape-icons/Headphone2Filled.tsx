import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Headphone2Filled/> --------------------------------------------------------------------- */

export const Headphone2Filled = ({
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
      d="M6.276 5.248C7.754 3.695 9.79 3 12 3c2.21 0 4.245.695 5.724 2.248C19.199 6.797 20 9.072 20 12v1h-2v-1c0-2.572-.7-4.297-1.724-5.373C15.255 5.555 13.79 5 12 5c-1.79 0-3.255.555-4.276 1.627C6.699 7.703 6 9.427 6 12v1H4v-1c0-2.928.8-5.203 2.276-6.752Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="M17 20h2.5a2.5 2.5 0 0 0 2.5-2.5v-3a2.5 2.5 0 0 0-2.5-2.5H17v8ZM7 20H4.5A2.5 2.5 0 0 1 2 17.5v-3A2.5 2.5 0 0 1 4.5 12H7v8Z"
    />
  </Svg>
)

