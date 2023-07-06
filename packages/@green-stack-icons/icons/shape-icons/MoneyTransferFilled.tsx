import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
import type { SvgProps } from 'react-native-svg'

/* --- Types ----------------------------------------------------------------------------------- */

type IconProps = SvgProps & { fill?: string; stroke?: string; size?: number }

/* --- <MoneyTransferFilled/> ------------------------------------------------------------------ */

export const MoneyTransferFilled = ({ size = 24, fill = '#333333', ...svgProps }: IconProps) => (
  <Svg width={size} height={size} fill="none" viewBox="0 0 24 24" {...svgProps}>
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M12 1a1 1 0 0 1 1 1v12a1 1 0 1 1-2 0V2a1 1 0 0 1 1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M9.39 4.156c.883-.934 2.337-1.304 3.64-1.093 1.325.214 2.54 1.052 2.928 2.339a1 1 0 0 1-1.915.576c-.113-.373-.558-.815-1.333-.94-.793-.13-1.534.137-1.87.496a.895.895 0 0 1-.023.023l.003-.003s-.024.025-.058.07c-.04.054-.083.121-.118.195-.072.153-.066.239-.044.294l.001.002c.01.027.04.088.187.199.166.125.393.25.755.445l.007.004c.3.164.481.228.753.322l.015.005c.3.103.674.232 1.275.514 1.212.564 1.613.923 1.858 1.305l.014.022c.589.97.23 1.912.112 2.16-.275.609-.753.994-1.139 1.228-.39.236-.77.367-.938.425-.222.078-1.758.58-3.347-.068-.867-.352-1.371-.883-1.58-1.158a3.147 3.147 0 0 1-.51-.907 1 1 0 1 1 1.873-.702 1.154 1.154 0 0 0 .23.4c.025.033.256.318.74.514l.002.001c.432.176.884.2 1.266.165a3.349 3.349 0 0 0 .645-.126l.011-.003.003-.002.012-.004a2.84 2.84 0 0 0 .557-.245c.2-.122.309-.242.354-.345a.81.81 0 0 1 .013-.027l.005-.016a.432.432 0 0 0 .017-.084.26.26 0 0 0-.024-.147.842.842 0 0 0-.069-.055c-.128-.094-.399-.262-.95-.518l-.003-.002c-.506-.237-.803-.34-1.075-.433l-.018-.007a6.119 6.119 0 0 1-1.058-.456l-.01-.005c-.325-.174-.692-.37-1-.603-.33-.249-.655-.583-.844-1.065-.298-.754-.111-1.444.096-1.882.196-.415.453-.704.554-.808ZM1 19a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2H2a1 1 0 0 1-1-1ZM14 19a1 1 0 0 1 1-1h7a1 1 0 1 1 0 2h-7a1 1 0 0 1-1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill={fill}
      fillRule="evenodd"
      d="M5.707 15.293a1 1 0 0 1 0 1.414L3.414 19l2.293 2.293a1 1 0 1 1-1.414 1.414l-3-3a1 1 0 0 1 0-1.414l3-3a1 1 0 0 1 1.414 0ZM18.293 15.293a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L20.586 19l-2.293-2.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>
)
