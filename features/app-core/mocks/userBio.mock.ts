import { UserBio } from '../schemas/UserBio.schema'

export const userBioMock: UserBio = {
  slug: 'codinsonn',
  title: '@codinsonn',
  titleLink: 'https://www.instagram.com/codinsonn.dev/',
  bioText:
    'Dev Memes & GREEN stack dreams { ...💚 } Helping you take your react skills cross-platform 👾 ⚡️ 🤖 Typescript ⚡️ GraphQL ⚡️ React-Native ⚡️ Expo ⚡️ Next.js',
  imageUrl: '/img/CodelyFansLogoPic160x160.jpeg',
  iconLinks: [
    {
      id: '1',
      link: 'https://twitter.com/codinsonn',
      iconComponent: 'TwitterIcon',
    },
    {
      id: '2',
      link: 'https://github.com/sponsors/codinsonn',
      iconComponent: 'GithubIcon',
    },
    {
      id: '3',
      link: 'https://dev.to/codinsonn',
      iconComponent: 'DevIcon',
    },
    {
      id: '4',
      link: '...',
      iconComponent: 'ReactIcon',
    },
    {
      id: '5',
      link: '...',
      iconComponent: 'ShopifyIcon',
    },
    {
      id: '6',
      link: '...',
      iconComponent: 'RedbubbleIcon',
    },
    {
      id: '7',
      link: '...',
      iconComponent: 'BehanceIcon',
    },
  ],
}
