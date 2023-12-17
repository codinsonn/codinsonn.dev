import { z, aetherSchema } from 'aetherspace/schemas'
import { SocialLinkData } from 'links-page/schemas/SocialLinkData'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ResumeCTAData: `The final CTA title and links for the resume to help people get in touch or get hired`,
  title: `The final title of this to get people to hire you`,
  ctaLinks: `The final links where those interested can get in contact to hire you`,
}

/** --- ResumeCTAData -------------------------------------------------------------------------- */
/** -i- The final CTA title and links for the resume to help people get in touch or get hired */
export const ResumeCTAData = aetherSchema('ResumeCTAData', {
  title: z.string().describe(d.title),
  ctaLinks: SocialLinkData.array().describe(d.ctaLinks),
}).describe(d.ResumeCTAData)

/** -i- The final CTA title and links for the resume to help people get in touch or get hired */
export type ResumeCTAData = z.infer<typeof ResumeCTAData>
