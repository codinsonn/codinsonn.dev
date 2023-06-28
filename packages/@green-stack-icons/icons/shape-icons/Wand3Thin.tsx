import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Wand3Thin/> ---------------------------------------------------------------------------- */

export const Wand3Thin = ({
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
      d="M21.49 21.49c-.68.68-1.79.68-2.47 0l-9.77-9.77a1.75 1.75 0 0 1 0-2.47 1.75 1.75 0 0 1 2.47 0l9.77 9.77c.68.68.68 1.79 0 2.47Z"
    />
    <Path
      stroke={fill}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m9.25 9.25 4.59 4.59"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeMiterlimit={10}
      d="m11.6 3.1.34.11.28-.21-.01.36.29.2-.33.11-.11.33-.2-.29-.36.01.21-.28-.11-.34ZM3.1 11.6l.34.11.28-.21-.01.36.29.2-.33.11-.11.33-.2-.29-.36.01.21-.28-.11-.34ZM3.7 3.7l.67.23.57-.43-.01.71.57.41-.67.21-.21.67-.41-.57-.71.01.43-.57-.23-.67Z"
    />
  </Svg>
)

