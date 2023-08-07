import { useState } from 'react'
import Animated, { SlideInDown, SlideOutDown } from 'react-native-reanimated'
// Schemas
import { z, aetherSchema, AetherProps } from '../../schemas'
// Primitives
import { Pressable, View } from '../../primitives'

/* --- Schemas --------------------------------------------------------------------------------- */

export const AetherModalProps = aetherSchema('AetherModalProps', {
  backdropClasses: z.string().optional(),
  backdropColor: z.string().color().default('#333333'),
  modalClasses: z.string().optional(),
  modalColor: z.string().color().default('#FFFFFF'),
})

export type TAetherModalProps = AetherProps<typeof AetherModalProps> & {
  children: React.ReactNode
}

/* --- <AetherModal/> -------------------------------------------------------------------------- */

export const AetherModal = (props: TAetherModalProps) => {
  // Props
  const { children, backdropClasses, backdropColor, modalClasses, modalColor } =
    AetherModalProps.applyDefaults(props) as TAetherModalProps

  // State
  const [isOpen, setOpen] = useState(false)

  // -- Handlers --

  const toggleSheet = () => setOpen(!isOpen)

  // -- Render --

  if (!isOpen) return null

  return (
    <>
      <Pressable
        accessibilityRole="button"
        tw={[
          'absolute left-0 right-0 top-0 bottom-0 z-10',
          backdropClasses,
          backdropColor && `bg-[${backdropColor}]`,
        ]}
        onPress={toggleSheet}
      />
      <AnimatedContainer
        tw={[
          'absolute p-4 w-full h-auto min-h-[50px] rounded-t-xl z-10 bottom-[-22px]',
          modalClasses,
          modalColor && `bg-[${modalColor}]`,
        ]}
        entering={SlideInDown.springify().damping(15)}
        exiting={SlideOutDown}
      >
        {children}
      </AnimatedContainer>
    </>
  )
}

/* --- Styles ---------------------------------------------------------------------------------- */

const AnimatedContainer = Animated.createAnimatedComponent(View)

/* --- Docs ------------------------------------------------------------------------------------ */

export const getDocumentationProps = AetherModalProps.introspect()
