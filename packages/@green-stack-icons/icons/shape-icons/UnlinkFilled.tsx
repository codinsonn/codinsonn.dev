import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <UnlinkFilled/> ------------------------------------------------------------------------- */

export const UnlinkFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M14.635 2.43a4.911 4.911 0 0 1 6.93 0l.002.003A4.891 4.891 0 0 1 23 5.9a4.891 4.891 0 0 1-1.433 3.467l-3.08 3.08a1 1 0 0 1-1.414-1.414l3.08-3.08A2.891 2.891 0 0 0 21 5.9c0-.747-.283-1.488-.846-2.052a2.911 2.911 0 0 0-4.108 0l-5.093 5.104A2.86 2.86 0 0 0 10.1 11c0 .134.01.27.029.417a1.05 1.05 0 0 1 .024.137 2.716 2.716 0 0 0 .116.4c.13.391.356.764.68 1.08l.008.009c.167.167.344.305.518.41a1 1 0 0 1-1.03 1.715 4.715 4.715 0 0 1-.898-.707 4.706 4.706 0 0 1-1.17-1.86 4.837 4.837 0 0 1-.217-.82c-.034-.24-.06-.5-.06-.781a4.86 4.86 0 0 1 1.445-3.47l5.09-5.1ZM8.16 11.69a.76.76 0 0 0 0 .007v-.007Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12.182 9.176a1 1 0 0 1 1.373-.343c.324.194.627.435.898.706.55.538.941 1.179 1.17 1.86a4.842 4.842 0 0 1 .217.82c.034.24.06.5.06.781a4.86 4.86 0 0 1-1.445 3.47l-5.09 5.1a4.91 4.91 0 0 1-6.93 0l-.002-.003A4.891 4.891 0 0 1 1 18.1c0-1.253.477-2.511 1.433-3.467l3.08-3.08a1 1 0 0 1 1.414 1.414l-3.08 3.08A2.891 2.891 0 0 0 3 18.1c0 .747.283 1.488.846 2.052a2.911 2.911 0 0 0 4.11-.001l3.576-3.587 1.515-1.516A2.86 2.86 0 0 0 13.9 13c0-.134-.01-.27-.029-.417a1.02 1.02 0 0 1-.024-.137 2.716 2.716 0 0 0-.116-.4 2.707 2.707 0 0 0-.68-1.08l-.008-.009a2.718 2.718 0 0 0-.518-.41 1 1 0 0 1-.343-1.371Zm3.658 3.134v-.007.007ZM9.06 1.034a1 1 0 0 1 1.226.706l.62 2.3a1 1 0 0 1-1.932.52l-.62-2.3a1 1 0 0 1 .706-1.226ZM13.8 18.735a1 1 0 0 1 1.225.705l.62 2.3a1 1 0 0 1-1.93.52l-.62-2.3a1 1 0 0 1 .705-1.226ZM18.704 13.803a1 1 0 0 1 1.223-.71l2.33.62a1 1 0 0 1-.514 1.933l-2.33-.62a1 1 0 0 1-.71-1.223ZM16.16 16.165a1 1 0 0 1 1.415-.004l1.71 1.7a1 1 0 1 1-1.41 1.418l-1.71-1.7a1 1 0 0 1-.004-1.414ZM4.71 4.725a1 1 0 0 1 1.415-.004l1.71 1.7a1 1 0 1 1-1.41 1.418l-1.71-1.7a1 1 0 0 1-.004-1.414ZM1.034 9.063a1 1 0 0 1 1.223-.71l2.33.62a1 1 0 0 1-.514 1.933l-2.33-.62a1 1 0 0 1-.71-1.223Z"
      clipRule="evenodd"
    />
  </Svg>
)
