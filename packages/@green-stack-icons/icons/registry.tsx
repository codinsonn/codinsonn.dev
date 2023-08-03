import { iconRegistry as aetherIcons } from './aetherspace/registry'
import { iconRegistry as shapeIcons } from './shape-icons/registry'

/** --- iconRegistry --------------------------------------------------------------------------- */
/** -i- Register any icons by preferred AetherIcon "name" key */
export const iconRegistry = {
  ...aetherIcons,
  ...shapeIcons,
} as const
