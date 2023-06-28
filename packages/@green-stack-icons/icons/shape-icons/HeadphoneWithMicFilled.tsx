import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <HeadphoneWithMicFilled/> --------------------------------------------------------------- */

export const HeadphoneWithMicFilled = ({
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
      d="M20 16v-1h-2v1c0 1.666-.71 2.871-1.838 3.691-.604.44-1.34.776-2.169.998A2.5 2.5 0 1 0 11.5 23c2.15 0 4.249-.535 5.838-1.691C18.961 20.129 20 18.333 20 16Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M6.311 3.087C7.781 1.692 9.793 1 12 1s4.22.692 5.689 2.087C19.166 4.492 20 6.518 20 9v.5c.607.455 1 1.181 1 2v2a2.5 2.5 0 0 1-2.5 2.5H17V9h1c0-2.018-.666-3.491-1.689-4.463C15.281 3.558 13.793 3 12 3c-1.793 0-3.28.558-4.311 1.537C6.666 5.51 6 6.982 6 9h1v7H5.5A2.5 2.5 0 0 1 3 13.5v-2c0-.819.393-1.545 1-2V9c0-2.482.834-4.509 2.311-5.912Z"
      clipRule="evenodd"
    />
  </Svg>
)

