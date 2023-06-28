import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <SlackFilled/> -------------------------------------------------------------------------- */

export const SlackFilled = ({
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
      d="M21 9.5c0 .83-.67 1.5-1.5 1.5H18V9.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5ZM14.5 11c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5ZM9.5 3c.83 0 1.5.67 1.5 1.5V6H9.5C8.67 6 8 5.33 8 4.5S8.67 3 9.5 3ZM11 9.5c0 .83-.67 1.5-1.5 1.5h-5C3.67 11 3 10.33 3 9.5S3.67 8 4.5 8h5c.83 0 1.5.67 1.5 1.5ZM3 14.5c0-.83.67-1.5 1.5-1.5H6v1.5c0 .83-.67 1.5-1.5 1.5S3 15.33 3 14.5ZM9.5 13c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 20.33 8 19.5v-5c0-.83.67-1.5 1.5-1.5ZM14.5 21c-.83 0-1.5-.67-1.5-1.5V18h1.5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5ZM13 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5Z"
    />
  </Svg>
)

