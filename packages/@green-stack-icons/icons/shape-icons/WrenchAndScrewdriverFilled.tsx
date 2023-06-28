import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from "react-native-svg"

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number; }

/* --- <WrenchAndScrewdriverFilled/> ----------------------------------------------------------- */

export const WrenchAndScrewdriverFilled = ({
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
      d="m15.127 11.638-2.572 2c-.59.46-1.159.946-1.702 1.458l6.026 6.026a3 3 0 0 0 4.242-4.243l-4.946-4.947a4.993 4.993 0 0 1-1.048-.294Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M10.853 15.096a23.755 23.755 0 0 1 1.702-1.458l2.572-2c.34.137.691.235 1.048.294"
    />
    <Path
      fill={fill}
      d="M11.454 10.04 6.95 5.537l-.707-2.122L3.414 2 2 3.414l1.414 2.829 2.121.707 4.681 4.68c.05-.061.098-.123.146-.185l1.092-1.405Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m11.454 10.04-1.092 1.405a23.87 23.87 0 0 1-.146.186"
    />
    <Path
      fill={fill}
      d="M15.127 11.638a4.981 4.981 0 0 1-1.663-1.102 4.981 4.981 0 0 1-1.102-1.663l-2 2.572a23.771 23.771 0 0 1-6.534 5.79l-.69.414a2.342 2.342 0 1 0 3.213 3.214l.414-.691a23.77 23.77 0 0 1 5.79-6.534l2.572-2Z"
    />
    <Path
      stroke={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.127 11.638a4.981 4.981 0 0 1-1.663-1.102 4.984 4.984 0 0 1-1.102-1.663"
    />
    <Path
      fill={fill}
      d="M21.656 5.173a5.001 5.001 0 1 1-2.829-2.829L15.94 5.232a1.5 1.5 0 0 0 0 2.122l.707.707a1.5 1.5 0 0 0 2.122 0l2.888-2.888Z"
    />
  </Svg>
)

