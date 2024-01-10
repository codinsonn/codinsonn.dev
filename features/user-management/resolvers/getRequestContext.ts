import { aetherResolver } from 'aetherspace/utils/serverUtils'
import { GetRequestContextDataBridge } from '../schemas/GetRequestContextDataBridge' // prettier-ignore
import { GetRequestContextResponse } from '../schemas/GetRequestContextResponse'

/** --- getRequestContext ---------------------------------------------------------------------- */
/** -i- Retrieve the request context (e.g. auth data calculated from JWT token) */
export const getRequestContext = aetherResolver(
  async ({ args, parseArgs, withDefaults, handleError, context, user }) => {
    try {
      const clerkUser = (user || context?.user) as GetRequestContextResponse['user']

      // -- Get user from DB --

      // TODO: Integrate with your DB here, using the user ID from context (e.g. `user?.id` or `context?.auth?.user_id`)

      // -- Respond --

      return withDefaults({ ...context, user: clerkUser })
    } catch (err) {
      throw handleError(err)
    }
  },
  GetRequestContextDataBridge
)
