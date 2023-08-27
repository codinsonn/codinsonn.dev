import { useMemo } from 'react'
// Types
import { TailwindFn } from 'twrnc'
// Context
import { useAetherContext } from '../context'

/** --- useTailwindStyles() ------------------------------------------------------------------------ */
/** -i- React hook to extract style values from your tailwind twrnc theme classnames. */
export const useTailwindStyles = (twClasses: string) => {
  // Context
  const aetherContext = useAetherContext()

  // Vars
  const tailwind: TailwindFn = globalThis?.tailwindFn ?? aetherContext?.tailwind

  // Memoize
  const twStyles = useMemo(() => {
    if (tailwind) return tailwind`${twClasses}`
  }, [tailwind, twClasses])

  // Return
  return twStyles ?? {}
}
