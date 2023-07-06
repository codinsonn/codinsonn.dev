import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <ForestThin/> --------------------------------------------------------------------------- */

export const ForestThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path stroke={fill} strokeLinecap="round" d="M9.72 17H9v5h1v-4.8l-.28-.2ZM16 18h-1v4h1v-4Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.36 5.57c-.46.65-.57 1.29-.59 1.56-.12.05-1.81.74-2.1 2.38-.18 1.03.29 1.83.45 2.08-.17.12-1.75 1.33-1.61 3.15A3.2 3.2 0 0 0 9.74 17H1.5l3.97-5H3.5l4-5h-2l4-5 2.86 3.57Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M22.46 13.97c-.23-1.37-1.34-2.12-1.56-2.27.69-.96.77-2.17.21-3.11-.59-.99-1.66-1.28-1.89-1.34-.04-.25-.4-2.14-2.1-2.92-.12-.05-.71-.32-1.53-.33-.25 0-1.73 0-2.84 1.1-.79.79-.95 1.7-.99 2.04-.12.05-1.81.74-2.1 2.38-.18 1.03.29 1.83.45 2.07-.17.13-1.75 1.33-1.61 3.15.07.94.57 1.59.75 1.8 1.2 1.43 3.21 1.49 4.93 1.45 1.17-.03 2.35-.06 3.52-.1.56-.02 1.13-.01 1.69-.09 1.85-.24 3.39-1.92 3.07-3.83ZM15.5 8v10M18.5 13l-3 4M12.5 10l3 4"
    />
  </Svg>
)
