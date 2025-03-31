import type { UserBio } from '../schemas/UserBio'

export const userBioMock: UserBio = {
  slug: 'codinsonn',
  title: '@codinsonn',
  titleLink: 'https://www.instagram.com/codinsonn.dev/',
  bioText:
    'Full-Product universal app dev 🤖 Build for Web and App Stores in a write-once way 👾 GQL ⚡️ React-Native ⚡️ Expo ⚡️ Next.js ⚡️ Zod ⚡️ TS',
  imageUrl: '/img/CodelyFansLogoPic160x160.jpeg',
  iconLinks: [
    {
      id: '1',
      linkUrl: 'https://twitter.com/codinsonn',
      linkIconKey: 'TwitterIcon',
    },
    {
      id: '2',
      linkUrl: 'https://github.com/codinsonn',
      linkIconKey: 'GithubIcon',
    },
    {
      id: '3',
      linkUrl: 'https://dev.to/codinsonn',
      linkIconKey: 'DevIcon',
    },
    {
      id: '4',
      linkUrl: 'https://fullproduct.dev',
      linkIconKey: 'ReactIcon',
    },
    {
      id: '5',
      linkUrl: 'https://codelyfans.myshopify.com',
      linkIconKey: 'ShopifyIcon',
    },
    {
      id: '6',
      linkUrl: 'https://www.redbubble.com/people/AetherspaceOne/shop',
      linkIconKey: 'RedbubbleIcon',
    },
    {
      id: '7',
      linkUrl: 'https://www.behance.net/ThorrStevens',
      linkIconKey: 'BehanceIcon',
    },
  ],
  linksInBio: [
    {
      id: '1',
      linkUrl: 'https://dev.to/codinsonn/how-to-compete-with-elons-twitter-a-dev-perspective-4j64',
      linkTitle: "'Move fast & build things', with Zod, Expo & Next.js",
      subTitle: 'Summary of the Full-Stack meetup on DEV.to',
      imageUrl: '/img/FSMeetup.jpeg',
      isFeatured: true,
    },
    {
      id: '2',
      linkUrl: 'https://fullproduct.dev',
      linkTitle: 'Intro to FullProduct.dev and the GREEN stack',
      subTitle: 'Universal App Starterkit',
      imageUrl: '/img/full-product-dot-dev-logo.png',
      isFeatured: true,
    },
    // {
    //   id: '3',
    //   linkUrl: 'https://www.youtube.com/watch?v=njhgS-erQbo',
    //   linkTitle: 'Intro to FullProduct.dev and the GREEN stack',
    //   subTitle: 'Recorded conference talk at Newline.gent',
    //   imageUrl: '/img/NewlineTalk.jpeg',
    //   isFeatured: true,
    // },
  ],
}
