import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Bookmark2Thin/> ------------------------------------------------------------------------ */

export const Bookmark2Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M21.41 3.5c-.04-.48-.42-.86-.91-.91L14.02 2a.99.99 0 0 0-.8.29l-7.2 7.2 4.05-4.05-7.78 7.78a.996.996 0 0 0 0 1.41l7.07 7.07c.39.39 1.03.39 1.41 0l7.78-7.78-4.05 4.05 7.2-7.2c.21-.21.32-.5.29-.8l-.58-6.47Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M17.414 9.414c.812-.812.838-2.104.057-2.885-.781-.78-2.073-.755-2.885.057-.813.812-.838 2.104-.057 2.885.781.78 2.073.756 2.885-.057Z"
    />
  </Svg>
)
