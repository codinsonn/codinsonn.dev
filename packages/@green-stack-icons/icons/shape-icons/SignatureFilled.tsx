import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <SignatureFilled/> ---------------------------------------------------------------------- */

export const SignatureFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M1 15a1 1 0 0 1 1-1h6a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM17 15a1 1 0 0 1 1-1h4a1 1 0 1 1 0 2h-4a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M16.967 8.73a1.72 1.72 0 0 0 .043-.08c.13-.262.243-.627.361-1.071l.071-.27c.089-.34.187-.718.294-1.014.069-.189.17-.432.327-.644.154-.207.491-.551 1.037-.551.44 0 .756.228.94.42.177.186.299.406.385.593.174.38.31.875.427 1.413.237 1.091.442 2.61.642 4.36a1 1 0 1 1-1.988.228 65.498 65.498 0 0 0-.433-3.24 5.484 5.484 0 0 1-.273.667c-.212.426-.614 1.043-1.358 1.23a1.134 1.134 0 0 1-.036.008c-.625.131-1.17-.122-1.544-.381a3.219 3.219 0 0 1-.126-.091c.092.7.15 1.428.164 2.175a21.006 21.006 0 0 1-1.105 7.082c-.315.914-.668 1.688-1.01 2.247a3.836 3.836 0 0 1-.566.74 1.76 1.76 0 0 1-.41.303 1.242 1.242 0 0 1-.805.127c-.541-.109-.785-.54-.866-.707a2.637 2.637 0 0 1-.2-.643c-.08-.412-.122-.94-.145-1.506-.044-1.084-.026-2.486-.008-3.866l.003-.222c.016-1.269.03-2.505-.003-3.508a2.158 2.158 0 0 1-.038.043c-.252.278-.728.68-1.405.627-.509-.02-.88-.304-1.107-.55-.238-.256-.421-.577-.567-.89-.293-.631-.537-1.46-.741-2.33a1 1 0 1 1 1.946-.458c.196.83.402 1.501.609 1.945v.001a7.215 7.215 0 0 0 .234-.42c.11-.207.243-.458.367-.646.082-.125.21-.304.386-.451.175-.147.537-.375 1.019-.282.51.096.768.48.87.668.118.215.186.453.231.657.094.418.144.953.174 1.52.06 1.149.043 2.647.024 4.1l-.002.194c-.014 1.08-.028 2.13-.014 3.025.045-.119.09-.242.134-.37a19.01 19.01 0 0 0 .995-6.393v-.002c-.047-2.738-.78-5.214-1.504-7.035a27.1 27.1 0 0 0-1.154-2.514l-.142-.282a3.723 3.723 0 0 1-.11-.239 1.335 1.335 0 0 1-.065-.198 1.011 1.011 0 0 1 .267-.956 1.003 1.003 0 0 1 1.338-.074c.112.09.18.184.198.208v.001c.05.068.087.135.105.168.044.081.096.187.148.296.072.151.165.35.271.58l.158.338c.351.755.823 1.75 1.347 2.731.53.992 1.088 1.923 1.607 2.569.244.304.448.505.603.62ZM1.293 8.293a1 1 0 0 1 1.414 0l3 3a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M5.707 8.293a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414l3-3a1 1 0 0 1 1.414 0Z"
      clipRule="evenodd"
    />
  </Svg>
)
