import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <LightModeFilled/> ---------------------------------------------------------------------- */

export const LightModeFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M17 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1ZM2 12a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1ZM15.536 8.464a1 1 0 0 1 0-1.414l2.12-2.121a1 1 0 1 1 1.415 1.414L16.95 8.464a1 1 0 0 1-1.414 0ZM4.929 19.071a1 1 0 0 1 0-1.414l2.121-2.121a1 1 0 0 1 1.415 1.414L6.343 19.07a1 1 0 0 1-1.414 0ZM8.464 8.464a1 1 0 0 1-1.414 0L4.93 6.344a1 1 0 1 1 1.414-1.415L8.464 7.05a1 1 0 0 1 0 1.414ZM19.071 19.071a1 1 0 0 1-1.414 0l-2.121-2.121a1 1 0 0 1 1.414-1.414l2.121 2.12a1 1 0 0 1 0 1.415ZM12 17a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0v-3a1 1 0 0 1 1-1ZM12 2a1 1 0 0 1 1 1v3a1 1 0 1 1-2 0V3a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <Path fill={fill} d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
  </Svg>
)
