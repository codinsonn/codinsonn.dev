import React from 'react'
import ContentLoader, { Circle, Rect } from 'react-content-loader/native'
import { Platform } from 'react-native'
import { SvgProps } from 'react-native-svg'
// Components
import { View } from 'aetherspace/primitives'
// Hooks
import { useLayoutInfo } from 'aetherspace/hooks'

/* --- <ResumeSkeleton/> -------------------------------------------------------------------------- */

export const ResumeSkeleton = (props: SvgProps) => {
  // Hooks
  const { measureOnLayout, layoutInfo } = useLayoutInfo()

  // Vars
  const loaderWidth = layoutInfo?.['loader-container']?.width
  const loaderHeight = 500
  const isLg = loaderWidth > 540
  const smAboutOffset = isLg ? 20 : 0
  const smContactOffset = isLg ? 51 : 0

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
          <Circle r="45" cy={isLg ? 45 : 49} cx={45} />
          {/* Name */}
          <Rect y={isLg ? 12 : 6} height="16" x={104} width={130} />
          {/* Summary */}
          {isLg ? (
            <Rect y="36" height="13" x={104} width={loaderWidth - 130} />
          ) : (
            <>
              <Rect y="29" height="13" x={104} width={loaderWidth - 130} />
              <Rect y="45" height="13" x={104} width={loaderWidth - 180} />
            </>
          )}
          {/* Website */}
          <Rect y={isLg ? 61 : 71} height="19" x={106} width={90} />
          {/* About */}
          <Rect y={140 - smAboutOffset} height="16" x={0} width={50} />
          <Rect y={166 - smAboutOffset} height="13" x={0} width={loaderWidth - 20} />
          <Rect y={186 - smAboutOffset} height="13" x={0} width={loaderWidth - 10} />
          <Rect y={206 - smAboutOffset} height="13" x={0} width={loaderWidth - 150} />
          {/* Contact */}
          <Rect y={294 - smContactOffset} height="16" x={0} width={50} />
          <Rect y={340 - smContactOffset} height="13" x={0} width={38} />
          <Rect y={340 - smContactOffset} height="13" x={100} width={160} />
          <Rect y={380 - smContactOffset} height="13" x={0} width={50} />
          <Rect y={380 - smContactOffset} height="13" x={100} width={120} />
          <Rect y={420 - smContactOffset} height="13" x={0} width={42} />
          <Rect y={420 - smContactOffset} height="13" x={100} width={90} />
        </ContentLoader>
      )}
    </View>
  )
}
