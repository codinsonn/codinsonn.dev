import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <FileAddFilled/> ------------------------------------------------------------------------ */

export const FileAddFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M20 13c-.83-.63-1.87-1-3-1-2.76 0-5 2.24-5 5 0 1.13.37 2.17 1 3H3c-.55 0-1-.45-1-1V3c0-.55.45-1 1-1h12.59c.26 0 .52.11.7.29l3.42 3.42c.18.18.29.44.29.7V13Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12.1 16H6M6 11h10M6 6h5"
    />
    <Path fill={fill} d="M17 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 22a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z"
    />
    <Path
      stroke={stroke}
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17 14v6M20 17h-6M15 2v5h5"
    />
    <Path
      fill={fill}
      d="M15 2v5h5v-.59c0-.26-.11-.52-.29-.7l-3.42-3.42c-.18-.18-.44-.29-.7-.29H15Z"
    />
  </Svg>
)
