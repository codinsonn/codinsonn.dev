import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Gift3Thin/> ---------------------------------------------------------------------------- */

export const Gift3Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path stroke={fill} d="M3 9h18v12H3V9ZM2 8a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3v1H2V8Z" />
    <Path stroke={fill} strokeLinecap="square" d="M12 5v16" />
    <Path
      stroke={fill}
      d="M12 5h2.828C15.476 5 16 4.553 16 4.001c0-.89-1.262-1.336-2-.706L12 5ZM12 5H9.172C8.525 5 8 4.553 8 4.001c0-.89 1.262-1.336 2-.706L12 5Z"
    />
  </Svg>
)
