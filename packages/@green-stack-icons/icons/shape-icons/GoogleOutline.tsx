import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <GoogleOutline/> ------------------------------------------------------------------------ */

export const GoogleOutline = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M12.6 22C6.76 22 2 17.51 2 12S6.76 2 12.6 2c2.6 0 5.1.88 6.69 2.35.55.51.56 1.35.02 1.87s-1.42.53-1.98.02c-1.07-.99-2.89-1.6-4.74-1.6-4.3 0-7.8 3.3-7.8 7.36 0 4.06 3.5 7.36 7.8 7.36 3.82 0 5.74-2.55 6.38-5.18h-6.62c-.77 0-1.4-.59-1.4-1.32 0-.73.63-1.32 1.4-1.32h8.24c.39 0 .76.15 1.02.42s.4.63.37.99c-.4 5.42-4.17 9.05-9.38 9.05Z"
    />
  </Svg>
)
