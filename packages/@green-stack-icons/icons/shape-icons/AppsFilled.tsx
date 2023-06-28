import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <AppsFilled/> --------------------------------------------------------------------------- */

export const AppsFilled = ({
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
      d="m15.587 11.41-3-3c-.78-.78-.78-2.05 0-2.83l3-3c.78-.78 2.05-.78 2.829 0l3 3c.779.78.779 2.05 0 2.83l-3 3c-.79.78-2.06.78-2.83 0Z"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M13 13v8h5.996c1.1 0 2-.9 2-2v-6H13ZM3 13v6c0 1.1.9 2 2 2h6.998H11v-8H3ZM5 3h6v8H3V5c0-1.1.9-2 2-2Z"
      clipRule="evenodd"
    />
  </Svg>
)

