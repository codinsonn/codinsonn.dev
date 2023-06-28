import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <DownloadOnLaptop2Filled/> -------------------------------------------------------------- */

export const DownloadOnLaptop2Filled = ({
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
      d="M4.5 7.25c-.69 0-1.25.56-1.25 1.25v10c0 .281.093.541.25.75H2a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-1.5c.157-.209.25-.469.25-.75v-10c0-.69-.56-1.25-1.25-1.25H15a.75.75 0 0 0 0 1.5h4.25v9.5H4.75v-9.5H9a.75.75 0 0 0 0-1.5H4.5Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12 3.25a.75.75 0 0 1 .75.75v9.19l1.72-1.72a.75.75 0 1 1 1.06 1.06l-3 3a.75.75 0 0 1-1.06 0l-3-3a.75.75 0 1 1 1.06-1.06l1.72 1.72V4a.75.75 0 0 1 .75-.75Z"
      clipRule="evenodd"
    />
  </Svg>
)

