import { createDataBridge } from 'aetherspace/schemas'
import { UserBio, UserBioInput } from './UserBio'

/** --- Data Bridge ---------------------------------------------------------------------------- */
/** -i- API Config for getResumeDataByUserSlug() */
export const GetUserBioBySlugDataBridge = createDataBridge({
  resolverName: 'getUserBioBySlug',
  resolverType: 'query',
  argsSchema: UserBioInput,
  responseSchema: UserBio,
  apiPath: '/api/bio/[slug]',
  allowedMethods: ['GRAPHQL', 'GET', 'POST'],
})
