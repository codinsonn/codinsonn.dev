import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <WrenchSlashFilled/> -------------------------------------------------------------------- */

export const WrenchSlashFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="m9.88 12.002-8.234 8.234a.5.5 0 0 0 .002.709l1.42 1.41a.5.5 0 0 0 .706-.002l8.229-8.229-2.122-2.122Zm4.244 0 .78-.779a.502.502 0 0 0 .075-.095c1.862 1.014 4.18.783 5.681-.718 1.32-1.32 1.66-3.28 1.03-4.99l-2.81 2.81c-.4.4-1.01.43-1.36.08l-1.84-1.84c-.35-.35-.32-.96.08-1.36l2.81-2.81c-1.7-.62-3.65-.29-4.98 1.04-1.506 1.498-1.733 3.824-.713 5.689a.502.502 0 0 0-.1.077l-.775.775 2.122 2.122ZM1.47 1.47a.75.75 0 0 1 1.06 0l20 20a.75.75 0 1 1-1.06 1.06l-20-20a.75.75 0 0 1 0-1.06Z"
      clipRule="evenodd"
    />
  </Svg>
)
