import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <BookOpenThin/> ------------------------------------------------------------------------- */

export const BookOpenThin = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      d="M6.515 4.121A2 2 0 0 0 5 6.061v.745a2 2 0 0 1 2.283-1.98L17 6.214V4.062a2 2 0 0 0-2.485-1.94l-8 2Z"
      clipRule="evenodd"
    />
    <Path
      fill="#000"
      d="m6.515 4.121-.146-.582.146.582ZM4.4 6.806a.6.6 0 0 0 1.2 0H4.4Zm2.883-1.98.085-.594-.085.594ZM17 6.214l-.085.594a.6.6 0 0 0 .685-.594H17Zm-2.485-4.093-.146-.582.146.582ZM5.6 6.061a1.4 1.4 0 0 1 1.06-1.358L6.37 3.54A2.6 2.6 0 0 0 4.4 6.062h1.2Zm0 .745v-.744H4.4v.744h1.2Zm0 0A1.4 1.4 0 0 1 7.198 5.42l.17-1.188A2.6 2.6 0 0 0 4.4 6.806h1.2ZM7.198 5.42l9.717 1.388.17-1.188-9.717-1.388-.17 1.188ZM16.4 4.062v2.152h1.2V4.062h-1.2Zm-1.74-1.359a1.4 1.4 0 0 1 1.74 1.359h1.2a2.6 2.6 0 0 0-3.23-2.523l.29 1.164Zm-8 2 8-2-.29-1.164-8 2 .29 1.164Z"
    />
    <Path
      stroke={fill}
      strokeLinejoin="round"
      d="M5 6.806a2 2 0 0 1 2.283-1.98l10 1.429A2 2 0 0 1 19 8.235v11.959a2 2 0 0 1-2.283 1.98l-10-1.429A2 2 0 0 1 5 18.765V6.806Z"
    />
    <Path stroke={fill} strokeLinecap="round" strokeLinejoin="round" d="m9 10 6 1M9 14l6 1" />
  </Svg>
)
