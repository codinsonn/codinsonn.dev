import { z } from 'aetherspace/schemas'
import { BaseResumeListItem } from './BaseResumeListItem'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ResumeCertificationData: `Certification for this resume`,
  issued: `the date this certificate was issued`,
  expires: `the expiration date for this certificate`,
  name: `the name of the certificate`,
  issuer: `the issuer of the certificate`,
}

/** --- ResumeCertificationData ---------------------------------------------------------------- */
/** -i- Certification for this resume */
export const ResumeCertificationData = BaseResumeListItem.extendSchema('ResumeCertificationData', {
  issued: z.string().describe(d.issued),
  expires: z.string().optional().describe(d.expires),
  name: z.string().describe(d.name),
  issuer: z.string().describe(d.issuer),
}).describe(d.ResumeCertificationData)

/** -i- Certification for this resume */
export type ResumeCertificationData = z.infer<typeof ResumeCertificationData>
