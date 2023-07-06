import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Gift2Filled/> -------------------------------------------------------------------------- */

export const Gift2Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M10.324 2.914c-.525-.448-1.219-.5-1.767-.307C8.01 2.8 7.5 3.287 7.5 4c0 .9.826 1.5 1.672 1.5H14.828c.846 0 1.672-.6 1.672-1.5 0-.715-.51-1.201-1.057-1.394-.548-.194-1.242-.14-1.767.307L12 4.344l-1.676-1.43Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M3 9h18v12H3z" />
    <Path stroke={stroke} d="M22 9H2" />
    <Path fill={fill} d="M2 5h20v4H2z" />
    <Path stroke={stroke} d="M12 5v16" />
  </Svg>
)
