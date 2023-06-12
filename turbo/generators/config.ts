/* eslint-disable import/no-anonymous-default-export */
import { PlopTypes } from '@turbo/gen'
// Generators
import { registerAetherWorkspaceGenerator } from './aether-workspace'
import { registerAetherSchemaGenerator } from './aether-schema'

/* --- Disclaimer ------------------------------------------------------------------------------ */

// Learn more about Turborepo Generators at:
// https://turbo.build/repo/docs/core-concepts/monorepos/code-generation

/* --- Register Generators --------------------------------------------------------------------- */

export default function (plop: PlopTypes.NodePlopAPI) {
  registerAetherWorkspaceGenerator(plop)
  registerAetherSchemaGenerator(plop)
}
