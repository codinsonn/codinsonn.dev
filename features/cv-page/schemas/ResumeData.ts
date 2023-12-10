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
import { ResumeCTAData } from './ResumeCTAData'
// Dummy
import { dummyResumeData } from '../mocks/resumeData.mock'

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
  projects: ResumeProjectData.array().nullish(),
  sideProjects: ResumeProjectData.array().nullish(),
  writing: ResumeWritingData.array().nullish(),
  speaking: ResumeSpeakingData.array().nullish(),
  awards: ResumeAwardData.array().nullish(),
  features: ResumeWritingData.array().nullish(),
  workExperience: ResumeExperienceData.array().nullish(),
  volunteering: ResumeExperienceData.array().nullish(),
  education: ResumeEducationData.array().nullish(),
  certifications: ResumeCertificationData.array().nullish(),
  ctaSection: ResumeCTAData.nullish(),
}).describe(d.ResumeData).eg(dummyResumeData) // prettier-ignore

/** -i- Single Source of Truth for the cv-page screen data */
export type TResumeData = z.infer<typeof ResumeData>
