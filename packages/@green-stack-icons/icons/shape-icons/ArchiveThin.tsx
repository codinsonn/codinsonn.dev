import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ArchiveThin/> -------------------------------------------------------------------------- */

export const ArchiveThin = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19 21H5c-.55 0-1-.45-1-1V7h16v13c0 .55-.45 1-1 1ZM21.5 7h-19c-.28 0-.5-.22-.5-.5v-3c0-.28.22-.5.5-.5h19c.28 0 .5.22.5.5v3c0 .28-.22.5-.5.5Z"
    />
    <Path fill={stroke} d="M9 12h6Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9 12h6"
    />
  </Svg>
)
