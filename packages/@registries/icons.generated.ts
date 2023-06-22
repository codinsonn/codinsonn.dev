// -i- Auto generated with 'yarn ats collect-icons'
import { iconRegistry as linksPageIcons } from '../../features/links-page/icons/registry'
import { iconRegistry as cvPageIcons } from '../../features/cv-page/icons/registry'

/* --- Exports --------------------------------------------------------------------------------- */

export const REGISTERED_ICONS = {
    ...linksPageIcons,
    ...cvPageIcons,
} as const // prettier-ignore

/* --- Types ----------------------------------------------------------------------------------- */

export type REGISTERED_ICON_KEYS = keyof typeof REGISTERED_ICONS
