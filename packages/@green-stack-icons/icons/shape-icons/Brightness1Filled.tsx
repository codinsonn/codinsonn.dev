import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Brightness1Filled/> -------------------------------------------------------------------- */

export const Brightness1Filled = ({
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
    <Path fill={fill} d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M10.99 3a1 1 0 0 1 1-1h.02a1 1 0 1 1 0 2h-.02a1 1 0 0 1-1-1ZM10.99 21a1 1 0 0 1 1-1h.02a1 1 0 1 1 0 2h-.02a1 1 0 0 1-1-1ZM21 10.99a1 1 0 0 1 1 1v.02a1 1 0 1 1-2 0v-.02a1 1 0 0 1 1-1ZM3 10.99a1 1 0 0 1 1 1v.02a1 1 0 1 1-2 0v-.02a1 1 0 0 1 1-1ZM4.922 6.35a1 1 0 0 1 0-1.414l.014-.014A1 1 0 1 1 6.35 6.336l-.014.014a1 1 0 0 1-1.414 0ZM17.65 19.078a1 1 0 0 1 0-1.414l.014-.014a1 1 0 0 1 1.414 1.414l-.014.014a1 1 0 0 1-1.414 0ZM17.65 4.922a1 1 0 0 1 1.414 0l.014.014a1 1 0 0 1-1.414 1.414l-.014-.014a1 1 0 0 1 0-1.414ZM4.922 17.65a1 1 0 0 1 1.414 0l.014.014a1 1 0 1 1-1.414 1.414l-.014-.014a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>
)

