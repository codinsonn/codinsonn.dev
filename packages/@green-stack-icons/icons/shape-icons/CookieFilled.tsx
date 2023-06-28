import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <CookieFilled/> ------------------------------------------------------------------------- */

export const CookieFilled = ({
  size = 24,
  fill = '#333333',
  stroke = '#FFFFFF',
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
      fill={fill}
      d="M12 1.5C6.204 1.5 1.5 6.204 1.5 12S6.204 22.5 12 22.5 22.5 17.796 22.5 12a.5.5 0 0 0-.786-.41c-2.378 1.662-5.426-.871-4.229-3.503l.006-.015.05-.12a.5.5 0 0 0-.673-.645l-1.52.71-.006.003-.01.004-.007.002-.048.017c-2.832.727-5.08-2.435-3.451-4.875v-.002l.59-.89A.5.5 0 0 0 12 1.5Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      d="M8 8h.01M12 13h.01M20 16h.01M14 17h.01"
    />
    <Path
      fill={fill}
      d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
    <Path
      stroke={stroke}
      d="M9 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM6 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
    />
  </Svg>
)

