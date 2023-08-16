import React from 'react'
import ContentLoader, { Circle, Rect } from 'react-content-loader/native'
import { Platform } from 'react-native'
import { SvgProps } from 'react-native-svg'
// Components
import { View } from 'aetherspace/primitives'
// Hooks
import { useLayoutInfo } from 'aetherspace/hooks'

/* --- <BioSkeleton/> -------------------------------------------------------------------------- */

export const BioSkeleton = (props: SvgProps & { offsetWidth?: number }) => {
  // Hooks
  const { measureOnLayout, layoutInfo } = useLayoutInfo()

  // Vars
  const loaderWidth = layoutInfo?.['loader-container']?.width
  const loaderHeight = 400
  const isLargeScreen = loaderWidth > 540
  const aboutWidthModifier = isLargeScreen ? 1.5 : 1
  const iconCircleSpace = isLargeScreen ? 51 : 42
  const iconCirclesY = isLargeScreen ? 240 : 260
  const linksTitleY = isLargeScreen ? 312 : 344

  // -- Helpers --

  const midWayPoint = (width: number) => (loaderWidth - width) / 2

  // -- Render --

  return (
    <View tw="w-full" onLayout={measureOnLayout('loader-container')}>
      {!!loaderWidth && (
        <ContentLoader
          speed={2}
          animate={Platform.OS !== 'android'}
          width={loaderWidth}
          height={loaderHeight}
          viewBox={`0 0 ${loaderWidth} ${loaderHeight}`}
          backgroundColor="#334155"
          foregroundColor="#475569"
          collapsable={undefined}
          {...props}
        >
          {/* Avatar */}
          <Circle r="40" cy="40" cx={midWayPoint(80) + 40} />
          {/* Handle */}
          <Rect y="95" height="16" x={midWayPoint(100)} width={100} />
          {/* About */}
          <Rect
            y="140"
            height="16"
            x={midWayPoint(300 * aboutWidthModifier)}
            width={300 * aboutWidthModifier}
          />
          <Rect
            y="160"
            height="16"
            x={midWayPoint(280 * aboutWidthModifier)}
            width={280 * aboutWidthModifier}
          />
          {!isLargeScreen && (
            <Rect
              y="180"
              height="16"
              x={midWayPoint(200 * aboutWidthModifier)}
              width={200 * aboutWidthModifier}
            />
          )}
          {/* Iconlinks */}
          <Circle r="16" cy={iconCirclesY} cx={midWayPoint(32) + 16 - 3 * iconCircleSpace} />
          <Circle r="16" cy={iconCirclesY} cx={midWayPoint(32) + 16 - 2 * iconCircleSpace} />
          <Circle r="16" cy={iconCirclesY} cx={midWayPoint(32) + 16 - 1 * iconCircleSpace} />
          <Circle r="16" cy={iconCirclesY} cx={midWayPoint(32) + 16} />
          <Circle r="16" cy={iconCirclesY} cx={midWayPoint(32) + 16 + 1 * iconCircleSpace} />
          <Circle r="16" cy={iconCirclesY} cx={midWayPoint(32) + 16 + 2 * iconCircleSpace} />
          <Circle r="16" cy={iconCirclesY} cx={midWayPoint(32) + 16 + 3 * iconCircleSpace} />
          {/* Linksection */}
          <Rect y={linksTitleY} height="20" x={midWayPoint(140)} width={140} />
        </ContentLoader>
      )}
    </View>
  )
}
