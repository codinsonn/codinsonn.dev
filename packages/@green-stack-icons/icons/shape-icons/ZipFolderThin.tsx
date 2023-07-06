import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ZipFolderThin/> ------------------------------------------------------------------------ */

export const ZipFolderThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m12 7-2-3H2v16h20V7H12Z"
      clipRule="evenodd"
    />
    <Path
      stroke={fill}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M16 10v1M16 8v1M16 12v1M16 16v1M16 18v1M16 14v1M15 19v1M15 9v1M15 7v1M15 11v1M15 15v1M15 17v1M15 13v1"
    />
  </Svg>
)
