import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <HandSwipeUpDownThin/> ------------------------------------------------------------------ */

export const HandSwipeUpDownThin = ({
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
      d="M20 2v8"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m18 8 2 2 2-2M18 4l2-2 2 2"
    />
    <Path d="M9.304 13.9V9.05c0-.8.649-1.45 1.447-1.45.8 0 1.448.65 1.448 1.45v4.85-3.05c0-.8.65-1.45 1.448-1.45.799 0 1.447.65 1.447 1.45v3.05h.01v-1.33c0-.76.65-1.37 1.448-1.37.799 0 1.448.62 1.448 1.37v4.48C17.98 19.8 15.664 22 12.778 22H11.55a5.457 5.457 0 0 1-3.185-1.03l-5.93-5.57c-.58-.55-.58-1.49 0-2.04.578-.55 1.447-.43 2.026.12l1.937 1.79V5.38c0-.76.65-1.38 1.448-1.38.799 0 1.448.62 1.448 1.37v8.53" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M9.304 13.9V9.05c0-.8.649-1.45 1.447-1.45.8 0 1.448.65 1.448 1.45v4.85-3.05c0-.8.65-1.45 1.448-1.45.799 0 1.447.65 1.447 1.45v3.05h.01v-1.33c0-.76.65-1.37 1.448-1.37.799 0 1.448.62 1.448 1.37v4.48C17.98 19.8 15.664 22 12.778 22H11.55a5.457 5.457 0 0 1-3.185-1.03l-5.93-5.57c-.58-.55-.58-1.49 0-2.04.578-.55 1.447-.43 2.026.12l1.937 1.79V5.38c0-.76.65-1.38 1.448-1.38.799 0 1.448.62 1.448 1.37v8.53"
    />
  </Svg>
)

