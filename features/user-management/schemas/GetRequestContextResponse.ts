import { z, aetherSchema } from 'aetherspace/schemas'
import {
  ClerkAuthReqContext,
  ClerkMiddlewareEvt,
  ClerkUserProperties,
} from '@aetherspace/clerk-auth/schemas'

/* --- GetRequestContextResponse --------------------------------------------------------------- */

export const GetRequestContextResponse = aetherSchema('GetRequestContextResponse', {
  auth: ClerkAuthReqContext.nullish(),
  evt: ClerkMiddlewareEvt.nullish(),
  user: ClerkUserProperties.nullish(),
})

export type GetRequestContextResponse = z.infer<typeof GetRequestContextResponse>
