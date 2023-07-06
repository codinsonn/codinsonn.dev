import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ContactUs2Filled/> --------------------------------------------------------------------- */

export const ContactUs2Filled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      d="M12 3v7h3v3l3-3h4V3H12ZM2.99 7.91 4.79 6l3.297 3.929c.276.329.37.76.25 1.16l-.421 1.426 2.427 2.892 1.245-.325a1.1 1.1 0 0 1 1.115.347L16 19.358l-2.391 1.204c-1.696.855-3.814.427-5.023-1.013l-5.711-6.805c-1.209-1.44-1.16-3.479.116-4.833Z"
    />
  </Svg>
)
