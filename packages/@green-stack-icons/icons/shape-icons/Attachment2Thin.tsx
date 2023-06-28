import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Attachment2Thin/> ---------------------------------------------------------------------- */

export const Attachment2Thin = ({
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
      d="m14.83 6.34-8.49 8.49a4.008 4.008 0 0 0 0 5.66 4.008 4.008 0 0 0 5.66 0L20.49 12"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m9.17 17.66 8.49-8.49a4.008 4.008 0 0 0 0-5.66 4.008 4.008 0 0 0-5.66 0L3.51 12"
    />
  </Svg>
)

