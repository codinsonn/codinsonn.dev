import * as React from 'react'
import Svg, { Path, Circle } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <GitMergeFilled/> ----------------------------------------------------------------------- */

export const GitMergeFilled = ({
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
      fillRule="evenodd"
      d="M5.859 7.01a1 1 0 0 1 1.131.848c.192 1.347 1.3 2.755 2.926 3.8 1.615 1.04 3.5 1.558 4.943 1.352a1 1 0 0 1 .282 1.98c-2.057.294-4.422-.438-6.307-1.649-1.874-1.205-3.516-3.046-3.824-5.2A1 1 0 0 1 5.86 7.01Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M6 7a1 1 0 0 1 1 1v8a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <Circle cx={6} cy={5} r={3} stroke={stroke} strokeLinejoin="round" />
    <Circle cx={6} cy={19} r={3} stroke={stroke} strokeLinejoin="round" />
    <Circle cx={18} cy={14} r={3} stroke={stroke} strokeLinejoin="round" />
    <Circle cx={6} cy={5} r={3} fill={fill} />
    <Circle cx={6} cy={19} r={3} fill={fill} />
    <Circle cx={18} cy={14} r={3} fill={fill} />
  </Svg>
)

