// Types
import { TResumeData } from '../schemas'

/* --- Mock Data ------------------------------------------------------------------------------- */

export const dummyResumeData: TResumeData = {
  id: 'codinsonn',
  slug: 'codinsonn',
  generalData: {
    profileImgUrl: '/img/CodelyFansLogoPic160x160.jpeg',
    displayName: 'Thorr Stevens',
    functionTitle: 'Full-Product Typescript Engineer',
    location: 'Ghent, Belgium or Remote',
    website: 'https://codinsonn.dev',
    pronouns: 'he/him',
    about: `Freelance Engineer helping you build your entire app for Web and Mobile in a write-once way, with GraphQL, React-Native, Expo, and Next.js`,
  },
  contactLinks: [
    {
      id: 'email',
      linkTitle: 'Email',
      linkUrl: 'mailto:thorr@codinsonn.dev',
      platformUsername: 'thorr@codinsonn.dev',
      socialLinkType: 'email',
    },
    {
      id: 'website',
      linkTitle: 'Website',
      linkUrl: 'https://codinsonn.dev',
      platformUsername: 'codinsonn.dev',
      socialLinkType: 'website',
    },
    {
      id: 'github',
      linkTitle: 'Github',
      linkUrl: 'https://github.com/codinsonn',
      platformUsername: 'codinsonn',
      socialLinkType: 'github',
    },
  ],
  projects: [],
  sideProjects: [],
  writing: [],
  speaking: [],
  awards: [],
  features: [],
  workExperience: [],
  volunteering: [],
  education: [],
}
