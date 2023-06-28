import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <ZipFolder2Filled/> --------------------------------------------------------------------- */

export const ZipFolder2Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    {...svgProps}
  >
    <Path fill={fill} d="M12 8H2V4h8l2 4ZM22 8H2v12h20V8Z" />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M2 8h20M16 10v1M16 8v1M16 12v1M16 16v1M16 18v1M16 14v1M15 19v1M15 9v1M15 11v1M15 15v1M15 17v1M15 13v1"
    />
  </Svg>
)

