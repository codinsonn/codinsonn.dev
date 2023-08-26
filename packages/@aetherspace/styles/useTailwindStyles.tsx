import { useMemo } from 'react'
// Context
import { useAetherContext } from '../context'

/** --- useTailwindStyles() ------------------------------------------------------------------------ */
/** -i- React hook to extract style values from your tailwind twrnc theme classnames. */
export const useTailwindStyles = (twClasses: string) => {
  // Context
  const { tailwind } = useAetherContext()

  // Memoize
  const twStyles = useMemo(() => {
    if (tailwind) return tailwind`${twClasses}`
  }, [tailwind, twClasses])

  // Return
  return twStyles ?? {}
}
