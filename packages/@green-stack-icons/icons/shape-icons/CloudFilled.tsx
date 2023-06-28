import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <CloudFilled/> -------------------------------------------------------------------------- */

export const CloudFilled = ({
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
      d="M18.1 9.7C17.3 7.6 15.2 6 12.7 6c-3.2 0-5.8 2.5-5.8 5.7v.3c-.5-.3-1-.4-1.6-.4C3.5 11.5 2 13 2 14.8 2 16.6 3.5 18 5.3 18h12.6c2.3 0 4.1-2 4.1-4.2s-1.7-3.9-3.9-4.1Z"
    />
  </Svg>
)

