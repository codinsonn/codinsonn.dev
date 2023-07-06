import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MailInboxNotificationThin/> ------------------------------------------------------------ */

export const MailInboxNotificationThin = ({
  size = 24,
  fill = '#333333',
  ...svgProps
}: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.5 4c-.5.9-.7 2-.4 3.1.4 1.3 1.4 2.3 2.7 2.7 1.2.4 2.3.2 3.2-.3V14h-5.5c0 1.9-1.6 3.5-3.5 3.5S7.5 15.9 7.5 14H2V6.7C2 5.2 3.2 4 4.7 4h9.8Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.5 14H2v5.3C2 20.8 3.2 22 4.7 22h12.6c1.5 0 2.7-1.2 2.7-2.7V14h-5.5c0 1.9-1.6 3.5-3.5 3.5S7.5 15.9 7.5 14ZM18 10a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z"
    />
  </Svg>
)
