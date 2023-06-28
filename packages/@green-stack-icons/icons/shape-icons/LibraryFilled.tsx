import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <LibraryFilled/> ------------------------------------------------------------------------ */

export const LibraryFilled = ({
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
      d="M5 1a1 1 0 0 0-1 1v17a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H5Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M12 5h-2v14h2V5Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M9 5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1V5Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12 1a1 1 0 0 0-.96 1.282l5 17A1 1 0 0 0 17 20h2a1 1 0 0 0 .96-1.282l-5-17A1 1 0 0 0 14 1h-2Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M2 5a1 1 0 0 1 1 1v15h18V6a1 1 0 1 1 2 0v16a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
  </Svg>
)

