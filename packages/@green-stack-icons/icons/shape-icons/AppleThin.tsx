import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <AppleThin/> ---------------------------------------------------------------------------- */

export const AppleThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M19.99 10.317C19.28 9.114 17.202 8 15.963 8c-1.64 0-2.329.994-3.458.994-1.17 0-2.239-.934-3.648-.934C6.928 8.07 4 9.84 4 14.006 4 17.794 7.458 22 9.417 22c1.189.01 1.479-.746 3.088-.746 1.609-.01 1.958.756 3.148.746 1.339-.01 2.378-1.472 3.148-2.625.55-.825.77-1.253 1.199-2.188-3.158-.785-3.788-5.826-.01-6.87ZM15.267 4.93c.7-.76 1.22-1.83 1.03-2.93-1.14.07-2.439.7-3.219 1.5-.7.73-1.249 1.82-1.029 2.87 1.24.03 2.479-.62 3.218-1.44Z"
    />
  </Svg>
)
