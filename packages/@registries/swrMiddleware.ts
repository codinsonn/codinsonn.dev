import type { Middleware } from 'swr'
import { swrClerkAuthMiddleware } from '@aetherspace/clerk-auth/middleware'

export const swrMiddlewareRegistry = [swrClerkAuthMiddleware] as Middleware[]
