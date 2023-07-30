import { z, aetherSchema } from 'aetherspace/schemas'
// Schemas
import { ResumeCardData } from './ResumeCardData'
import { SocialLinkData } from 'links-page/schemas'
import { ResumeProjectData } from './ResumeProjectData'
import { ResumeWritingData } from './ResumeWritingData'
import { ResumeSpeakingData } from './ResumeSpeakingData'
import { ResumeAwardData } from './ResumeAwardData'
import { ResumeExperienceData } from './ResumeExperienceData'
import { ResumeEducationData } from './ResumeEducationData'
import { ResumeCertificationData } from './ResumeCertificationData'

/* --- Descriptions ---------------------------------------------------------------------------- */

const d = {
  ResumeData: `Single Source of Truth for the resume screen data`,
  id: `the unique identifier for this resume`,
  slug: `the unique slug for this resume`,
  contactLinks: `the contact links for this resume, like email, phone, socials, etc.`,
}

/** --- ResumeData ----------------------------------------------------------------------------- */
/** -i- Single Source of Truth for the cv-page screen data */
export const ResumeData = aetherSchema('ResumeData', {
  id: z.string().id().describe(d.id),
  slug: z.string().describe(d.slug),
  generalData: ResumeCardData,
  contactLinks: SocialLinkData.array().describe(d.contactLinks),
  projects: ResumeProjectData.array(),
  sideProjects: ResumeProjectData.array(),
  writing: ResumeWritingData.array(),
  speaking: ResumeSpeakingData.array(),
  awards: ResumeAwardData.array(),
  features: ResumeWritingData.array(),
  workExperience: ResumeExperienceData.array(),
  volunteering: ResumeExperienceData.array(),
  education: ResumeEducationData.array(),
  certifications: ResumeCertificationData.array(),
}).describe(d.ResumeData)

/** -i- Single Source of Truth for the cv-page screen data */
export type TResumeData = z.infer<typeof ResumeData>
