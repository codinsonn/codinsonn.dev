import { TUserBio } from '../schemas'

export const userBioMock: TUserBio = {
  slug: 'codinsonn',
  title: '@codinsonn',
  titleLink: 'https://www.instagram.com/codinsonn.dev/',
  bioText:
    'Dev Memes & GREEN stack dreams { ...💚 } Helping you take React apps cross-platform 👾 ⚡️ 🤖 Typescript ⚡️ GraphQL ⚡️ React-Native ⚡️ Expo ⚡️ Next.js',
  imageUrl: '/img/CodelyFansLogoPic160x160.jpeg',
  iconLinks: [
    {
      id: '1',
      linkUrl: 'https://twitter.com/codinsonn',
      linkIconKey: 'TwitterIcon',
    },
    {
      id: '2',
      linkUrl: 'https://github.com/sponsors/codinsonn',
      linkIconKey: 'GithubIcon',
    },
    {
      id: '3',
      linkUrl: 'https://dev.to/codinsonn',
      linkIconKey: 'DevIcon',
    },
    {
      id: '4',
      linkUrl: '...',
      linkIconKey: 'ReactIcon',
    },
    {
      id: '5',
      linkUrl: '...',
      linkIconKey: 'ShopifyIcon',
    },
    {
      id: '6',
      linkUrl: '...',
      linkIconKey: 'RedbubbleIcon',
    },
    {
      id: '7',
      linkUrl: '...',
      linkIconKey: 'BehanceIcon',
    },
  ],
  linksInBio: [
    {
      id: '1',
      linkUrl: 'https://www.youtube.com/watch?v=njhgS-erQbo',
      linkTitle: 'An intro to Aetherspace and the GREEN stack',
      subTitle: 'Recorded conference talk at Newline.gent',
      imageUrl: '/img/NewlineTalk.jpeg',
      isFeatured: true,
    },
    {
      id: '2',
      linkUrl: 'https://dev.to/codinsonn/how-to-compete-with-elons-twitter-a-dev-perspective-4j64',
      linkTitle: "'Move fast & build things', with Zod, Expo & Next.js",
      subTitle: 'Summary of the Full-Stack meetup on DEV.to',
      imageUrl: '/img/FSMeetup.jpeg',
      isFeatured: true,
    },
  ],
}
