import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <CellularWaveFilled/> ------------------------------------------------------------------- */

export const CellularWaveFilled = ({
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
      d="M12 12a1 1 0 0 1 1 1v9a1 1 0 1 1-2 0v-9a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12 7.662a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM7.866 1.5A1 1 0 0 1 7.5 2.865 8.996 8.996 0 0 0 3 10.662a8.996 8.996 0 0 0 4.5 7.797 1 1 0 0 1-1 1.73A10.996 10.996 0 0 1 1 10.663C1 6.59 3.214 3.035 6.5 1.134a1 1 0 0 1 1.366.365ZM16.134 19.825a1 1 0 0 1 .365-1.366A8.996 8.996 0 0 0 21 10.662a8.996 8.996 0 0 0-4.5-7.796 1 1 0 0 1 1-1.732c3.286 1.9 5.5 5.455 5.5 9.528s-2.214 7.627-5.5 9.528a1 1 0 0 1-1.366-.365Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M9.866 4.964A1 1 0 0 1 9.5 6.33 4.998 4.998 0 0 0 7 10.662a4.998 4.998 0 0 0 2.5 4.332 1 1 0 0 1-1 1.731A6.998 6.998 0 0 1 5 10.662 6.998 6.998 0 0 1 8.5 4.6a1 1 0 0 1 1.366.365ZM14.134 16.36a1 1 0 0 1 .365-1.366A4.998 4.998 0 0 0 17 10.662a4.998 4.998 0 0 0-2.5-4.331 1 1 0 0 1 1-1.732 6.998 6.998 0 0 1 3.5 6.063 6.998 6.998 0 0 1-3.5 6.063 1 1 0 0 1-1.366-.365Z"
      clipRule="evenodd"
    />
  </Svg>
)

