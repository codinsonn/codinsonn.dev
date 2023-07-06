import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <PencilTipSuccess3Filled/> -------------------------------------------------------------- */

export const PencilTipSuccess3Filled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path fill={fill} d="M13 7H7l3-5 3 5Z" />
    <Path stroke={stroke} strokeLinejoin="round" strokeMiterlimit={10} d="M7 7h6" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M21.107 2.857 17.4 6.564l-2.507-2.507 1.414-1.414L17.4 3.736l2.293-2.293 1.414 1.414Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M7 7h6-6l-3 5h12l-3-5" />
    <Path stroke={stroke} strokeLinejoin="round" strokeMiterlimit={10} d="M4 12h12" />
    <Path fill={fill} d="M4 22V12h12v10" />
  </Svg>
)
