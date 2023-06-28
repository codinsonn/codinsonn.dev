import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <VolumeDownFilled/> --------------------------------------------------------------------- */

export const VolumeDownFilled = ({
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
      d="M9 8H5v8h4l6 5V3L9 8ZM17 15.46c1.2-.69 2-1.98 2-3.46s-.8-2.77-2-3.46"
    />
  </Svg>
)

