import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <GoogleCloudThin/> ---------------------------------------------------------------------- */

export const GoogleCloudThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeMiterlimit={10}
      d="M14.68 19h4.33c2.01 0 3.36-1.89 2.9-4.03-.22-1.04-.77-1.92-1.74-2.3-.58-.23-1.68-.46-1.6-.91.06-.35.12-.6.07-1.42-.02-.24-.05-.44-.08-.58-.02-.26-.08-.6-.23-.98-.11-.28-.23-.5-.34-.68-.23-.45-.73-1.29-1.7-2.01-.7-.52-1.52-.88-2.4-1.01-3.51-.55-6.53 2.22-6.53 5.7 0 .09.02.17.02.26-.93-.35-1.98-.42-3.15.22-1.23.68-2.13 1.94-2.22 3.37-.06 1.04.25 2 .82 2.75.21.23.42.45.64.68.12.13.33.31.61.48.41.24.79.31 1.11.37.2.04.49.08.83.09h8.66Z"
    />
    <Path
      stroke={fill}
      strokeMiterlimit={10}
      d="M2 14.88c0-2.27 1.8-4.11 4.02-4.11 2.22 0 4.02 1.84 4.02 4.11M18.56 11.75s-.29 1.4-1.13 1.96"
    />
  </Svg>
)
