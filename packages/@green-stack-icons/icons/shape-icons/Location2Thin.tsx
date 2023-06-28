import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Location2Thin/> ------------------------------------------------------------------------ */

export const Location2Thin = ({
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
      d="M12.01 2h-.02C8.29 2 5.12 4.95 5 8.51c-.03 1.09.29 2.28.74 3.2 0 0 .01.01.01.02l5.37 9.76c.18.34.53.51.88.51s.7-.17.88-.51l5.37-9.76c0-.01.01-.02.01-.02.45-.92.77-2.11.74-3.2C18.88 4.95 15.71 2 12.01 2Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12 11.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
    />
  </Svg>
)

