import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ImageFilled/> -------------------------------------------------------------------------- */

export const ImageFilled = ({
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
      d="m15.075 8.46-3.49 5.59a.999.999 0 0 1-1.47.25l-3.2-2.56a1 1 0 0 0-1.5.29l-3.08 5.48a.99.99 0 0 0 .86 1.49h17.61c.76 0 1.24-.81.88-1.48l-4.88-9.01c-.37-.67-1.32-.7-1.73-.05Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      d="M8.985 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2Z"
    />
  </Svg>
)

