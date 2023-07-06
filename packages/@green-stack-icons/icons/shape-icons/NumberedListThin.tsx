import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <NumberedListThin/> --------------------------------------------------------------------- */

export const NumberedListThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M9 19h12M9 12h12M9 5h12M2.88 21.19c.54.13 1.15.05 1.61-.25.43-.27.68-.75.54-1.24-.13-.46-.7-.67-1.16-.71.49.03.99-.21 1.18-.65.22-.49-.08-1.04-.53-1.31-.39-.24-.87-.31-1.32-.28M2.5 10.88c.44-.75 1.28-1.06 1.89-.78.46.22.88.81.76 1.41-.07.34-.3.56-.47.71-.51.44-1.23 1.06-2.18 1.78h3M4 7V3M3 7h2M3 3.5 4 3"
    />
  </Svg>
)
