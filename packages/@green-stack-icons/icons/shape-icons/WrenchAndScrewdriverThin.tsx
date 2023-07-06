import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <WrenchAndScrewdriverThin/> ------------------------------------------------------------- */

export const WrenchAndScrewdriverThin = ({
  size = 24,
  fill = '#333333',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinejoin="round"
      d="M21.656 5.173a5.001 5.001 0 1 1-2.829-2.829L15.94 5.232a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.122 0l2.888-2.888Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.127 11.638a4.981 4.981 0 0 1-1.663-1.102 4.984 4.984 0 0 1-1.101-1.663l-2 2.572a23.772 23.772 0 0 1-6.535 5.79l-.69.414a2.342 2.342 0 1 0 3.213 3.214l.415-.691a23.77 23.77 0 0 1 5.79-6.534l2.571-2Z"
    />
    <Path
      stroke={fill}
      strokeLinejoin="round"
      d="M12.37 13.784c.061-.05.123-.098.185-.146l1.405-1.093 4.505 4.505 2.12.707L22 20.587 20.586 22l-2.829-1.414-.707-2.122-4.68-4.68ZM12.363 8.873a4.993 4.993 0 0 1-.295-1.047L7.121 2.879A3 3 0 0 0 2.88 7.12l6.025 6.026c.512-.543.998-1.111 1.458-1.702l2-2.572Z"
    />
  </Svg>
)
