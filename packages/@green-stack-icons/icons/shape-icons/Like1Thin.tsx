import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <Like1Thin/> ---------------------------------------------------------------------------- */

export const Like1Thin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="m6 12 2.64-1.76c.23-.16.43-.35.58-.59.6-.96 1.24-2.18 1.78-3.65.37-1.01.62-1.96.79-2.8.14-.7.77-1.2 1.49-1.2 1.89 0 3.27 1.77 2.81 3.6L15 10h4.64c1.24 0 2.18 1.11 1.97 2.33l-1.33 8c-.16.96-1 1.67-1.97 1.67h-7.37c-.62 0-1.23-.14-1.79-.42L6 20v-8ZM5 22H3c-.55 0-1-.45-1-1V10c0-.55.45-1 1-1h2c.55 0 1 .45 1 1v11c0 .55-.45 1-1 1Z"
      clipRule="evenodd"
    />
  </Svg>
)
