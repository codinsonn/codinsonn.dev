import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Cancel2Thin/> -------------------------------------------------------------------------- */

export const Cancel2Thin = ({
  size = 24,
  fill = '#333333',
  ...svgProps
}: IconProps) => (
  <Svg
    width={size}
    height={size}
    fill="none"
    viewBox="0 0 24 24"
    {...svgProps}
  >
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M6.15 17.46c-.2-.2-.2-.51 0-.71l10.6-10.6c.2-.2.51-.2.71 0 .2.2.2.51 0 .71L6.85 17.46c-.19.2-.51.2-.7 0Z"
    />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M6.15 6.15c.2-.2.51-.2.71 0l10.61 10.61c.2.2.2.51 0 .71-.2.2-.51.2-.71 0L6.15 6.85c-.2-.19-.2-.51 0-.7Z"
    />
  </Svg>
)

