import { z } from 'aetherspace/schemas'

/** --- SocialLinkType ------------------------------------------------------------------------- */
/** -i- List of known social links */
export const SocialLinkType = z.enum([
  'custom',
  'email',
  'website',
  'twitter',
  'facebook',
  'instagram',
  'linkedin',
  'github',
  'youtube',
  'tiktok',
  'twitch',
  'reddit',
  'tumblr',
  'figma',
  'snapchat',
  'patreon',
  'paypal',
  'cashapp',
  'venmo',
  'discord',
  'telegram',
  'whatsapp',
  'signal',
  'slack',
  'tumblr',
  'medium',
  'trello',
  'pinterest',
  'etsy',
  'ebay',
  'amazon',
  'remoteOK',
  'upwork',
])

/** -i- List of known social links */
export const SOCIAL_LINK_TYPE = SocialLinkType.enum

/** -i- List of known social links */
export type SocialLinkType = z.infer<typeof SocialLinkType>

/** -i- List of known social links */
export type SOCIAL_LINK_TYPE = SocialLinkType
