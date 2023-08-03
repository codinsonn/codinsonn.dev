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
      linkUrl: `mailto:thorr@codinsonn.dev?subject=${encodeURIComponent(`Let's work together`)}`,
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
  projects: [
    {
      title: 'Commerce Aggregation App',
      client: 'Incubator or a large US retailer',
      year: '2023',
      linkUrl: '',
      collaborators: '',
      description: `6mo, NY, Built with expo, react-native & next.js, but can't say more sadly`,
    },
    {
      title: 'Cancer Companion App',
      client: 'My Cancer Companion by Dr. Eric Lim, Thoracic Surgeon',
      year: '2022',
      linkUrl: 'https://www.mycancercompanion.com/',
      collaborators: '',
      description: `My Cancer Companion is a free app providing the best, most up-to-date, and authoritative information for people with lung cancer. Cool features I worked on include Symptom logging (charts), Personalised recommendations, and Appointment management (calendars). Helped build this with Expo, React-Native, and Nest.js in Belgium and London.`,
    },
    {
      title: 'React renderer for a B2B eCommerce CMS',
      client: 'Marlon, Dockx, Denderwood',
      year: '2020',
      linkUrl: 'https://www.mycancercompanion.com/',
      collaborators: '',
      description: `Helped set up the server-side renderer and React component engine for Marlon's in-house B2B CMS. This project involved both internal work spread over 3 years on the admin side of things, and customer-facing React components that worked on servers and browsers alike. Including: Carts, Checkouts, Product Details, Maps, Interactive Logo Pickers, and Advanced Datagrids. Just to name a few.`,
    },
  ],
  sideProjects: [
    {
      title: 'Aetherspace GREEN stack starter',
      client: 'Github, Open-Source',
      year: 'Ongoing',
      linkUrl: 'https://github.com/Aetherspace/green-stack-starter-demo#readme',
      collaborators: '',
      description: `Kickstart your next project with Aetherspace: A Zod & Typescript-first approach to building cross-platform experiences with GraphQL, React-Native, Expo & Next.js, in a write-once way. So far, I've created and maintained this resource over the course of 3 years.`,
    },
  ],
  writing: [
    {
      title: 'Move fast and Build Things',
      year: '2022',
      publisher: 'dev.to',
      linkUrl: 'https://dev.to/codinsonn/how-to-compete-with-elons-twitter-a-dev-perspective-4j64',
      collaborators: '',
      description: `Summary of the Full-Stack Meetup talk I gave at Bothrs HQ.`,
    },
  ],
  speaking: [
    {
      title: 'Full-Product Universal Apps with Aetherspace',
      year: '2023',
      event: 'Newline 2023',
      location: 'Ghent, Belgium',
      linkUrl: 'https://www.youtube.com/watch?v=njhgS-erQbo',
      description: `Web vs. Mobile is dead 💀\nWeb AND Mobile is the future 🤝`,
    },
    {
      title: `'Move fast & build things', with Zod, Expo and Next.js`,
      year: '2022',
      event: 'Meetup.com',
      location: 'Ghent, Belgium',
      linkUrl: 'https://dev.to/codinsonn/how-to-compete-with-elons-twitter-a-dev-perspective-4j64',
      description: `What would it take for a startup to build the new Twitter? From going cross-platform from the start to the importance of docs when scaling your team, we explored how Aetherspace and the GREEN stack can help you compete with the likes of Elon Musk.`,
    },
  ],
  awards: [
    {
      title: 'Young Vision Award',
      year: '2012',
      presentedBy: 'De Tijd',
      linkUrl: `https://www.tijd.be/dossier/youngvisionaward-genomineerden/De-hypocrisie-van-onze-tijd/9272036`,
      description: `Was one of 4 finalists in a writing competition for 'De Tijd' with my piece on 'The Hypocrisy of our time'. Got featured in their physical paper, won a tablet and got to defend my article on Studio Brussel.`,
    },
  ],
  features: [],
  workExperience: [
    {
      title: 'Full-Product Typescript Engineer',
      from: '2022',
      to: '2023',
      company: 'Bothrs',
      location: 'Ghent, Belgium',
      linkUrl: 'https://www.bothrs.com/',
      description: `Built some cool Mobile Apps with Web features using Expo, React-Native, and Next.js here. Included clients in the US, London, Healthcare, and eCommerce sectors.`,
    },
    {
      title: 'Full-Stack React Developer',
      from: '2018',
      to: '2022',
      company: 'Marlon, iO',
      location: 'Ghent, Belgium',
      linkUrl: 'https://www.iodigital.com/nl/history/marlon',
      description: `Worked on a wide variety of projects here. Mostly Front-end work for their in-house eCommerce CMS that powers the likes of Dockx Rental and Denderwood. Aside from that, I also worked on some advanced web-based configurators for Daikin EU here, and even some Mobile apps with React-Native and Expo.`,
    },
    {
      title: 'Back-End, Web & Mobile Developer',
      from: '2017',
      to: '2016',
      company: 'Tildepost',
      location: 'Bredene, Belgium',
      linkUrl: '',
      description: `As the only engineer for the entire startup, I was building the project for all platforms with Expo, React-Native, and Node.js`,
    },
  ],
  volunteering: [
    {
      title: 'Open-Source Contributor',
      from: '2020',
      to: '2020',
      company: 'date-fns',
      location: 'Github, Open-Source',
      linkUrl: 'https://date-fns.org/#:~:text=%40TatiFKNavarro-,%40codinsonn,-%40waseemahmad31',
      description: '',
    },
    {
      title: 'Free GREEN stack template repo',
      from: '2020',
      to: 'Now',
      company: 'Aetherspace Digital',
      location: 'Github, Open-Source',
      linkUrl: 'https://github.com/Aetherspace/green-stack-starter-demo#readme',
      description: '',
    },
  ],
  education: [
    {
      title: 'Devine - Bachelor of Design and Development',
      from: '2012',
      to: '2016',
      institute: 'Howest',
      location: 'Kortrijk, Belgium',
      linkUrl: 'https://www.devine.be/',
      description: `As Deviner you use your design-, development- and research skills to shape the online experiences of today and tomorrow. The whole curriculum is shaped around UI/UX combined with Creative Programming and Motion Design`,
    },
  ],
  ctaSection: {
    title: 'Want to work together?',
    ctaLinks: [
      {
        id: 'email',
        linkTitle: 'thorr@codinsonn.dev',
        linkUrl: `mailto:thorr@codinsonn.dev?subject=${encodeURIComponent(`Let's work together`)}`,
        platformUsername: 'thorr@codinsonn.dev',
        socialLinkType: 'email',
      },
      {
        id: 'upwork',
        linkTitle: 'Hire me on Upwork',
        linkUrl: 'https://www.upwork.com/freelancers/~0106a52659af506ba6',
        platformUsername: 'codinsonn.dev',
        socialLinkType: 'upwork',
      },
      {
        id: 'remote-ok',
        linkTitle: 'Hire me on RemoteOK',
        linkUrl: 'https://remoteok.com/@codinsonn',
        platformUsername: 'codinsonn',
        socialLinkType: 'remoteOK',
      },
    ],
  },
}
