import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <BookmarkSlashFilled/> ------------------------------------------------------------------ */

export const BookmarkSlashFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M6 7.121V22l6-6 6 6v-2.879l-12-12Zm12 7.758V3c0-.55-.45-1-1-1H7c-.511 0-.936.389-.993.885L18 14.88ZM2.47 1.47a.75.75 0 0 1 1.06 0l18 18a.75.75 0 1 1-1.06 1.06l-18-18a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
)
