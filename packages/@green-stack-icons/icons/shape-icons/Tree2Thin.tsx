import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <Tree2Thin/> ---------------------------------------------------------------------------- */

export const Tree2Thin = ({
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
    <Path stroke={fill} strokeLinecap="round" d="M12.5 17h-1v5h1v-5Z" />
    <Path
      stroke={fill}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.453 12.68c-.25-1.47-1.43-2.27-1.67-2.43.74-1.03.83-2.32.22-3.33-.64-1.06-1.779-1.38-2.029-1.44-.05-.27-.43-2.29-2.249-3.13-.12-.05-.75-.33-1.619-.35-.28 0-1.86 0-3.039 1.18-.85.84-1.02 1.82-1.06 2.18-.13.05-1.938.79-2.248 2.55-.19 1.1.31 1.96.48 2.22-.18.14-1.88 1.42-1.73 3.37.08 1.01.61 1.71.8 1.93 1.29 1.53 3.439 1.6 5.278 1.56 1.26-.03 2.509-.07 3.768-.11.61-.02 1.21-.01 1.82-.09 1.979-.26 3.628-2.06 3.278-4.11ZM12 8v9M15 12l-3 5M9 10l3 4"
    />
  </Svg>
)

