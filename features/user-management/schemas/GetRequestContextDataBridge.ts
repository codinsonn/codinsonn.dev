import { createDataBridge } from 'aetherspace/schemas'
import { GetRequestContextArgs } from '../schemas/GetRequestContextArgs'
import { GetRequestContextResponse } from '../schemas/GetRequestContextResponse'

/** --- getRequestContextDataBridge ------------------------------------------------------------ */
/** -i- Aetherspace API Config for getRequestContext() */
export const GetRequestContextDataBridge = createDataBridge({
  resolverName: 'getRequestContext',
  resolverType: 'query',
  argsSchema: GetRequestContextArgs,
  responseSchema: GetRequestContextResponse,
  apiPath: '/api/context',
  allowedMethods: ['GRAPHQL', 'GET'],
})
