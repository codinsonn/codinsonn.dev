// -i- Mocked to avoid using @clerk/nextjs in Storybook
import React from 'react'
import { useMemo } from 'react'
import { action } from '@storybook/addon-actions'

/* --- useAuth() ------------------------------------------------------------------------------- */

export const useAuth = () => ({
  isSignedIn: false,
  session: null,
  user: null,
  signUp: {
    isLoaded: true,
    create: async () => {},
    prepareEmailAddressVerification: async () => {},
  },
  signIn: {
    isLoaded: true,
    create: async () => {},
  },
  signOut: {
    isLoaded: true,
    create: async () => {},
  },
  setActive: async () => {},
  getActive: async () => {},
})

/* --- useClerk() ------------------------------------------------------------------------------ */

export const useClerk = () => ({
  isLoaded: true,
  isSignedIn: false,
  session: null,
  user: null,
  signUp: {
    isLoaded: true,
    create: async () => {},
    prepareEmailAddressVerification: async () => {},
  },
  signIn: {
    isLoaded: true,
    create: async () => {},
  },
  signOut: {
    isLoaded: true,
    create: async () => {},
  },
  setActive: async () => {},
  getActive: async () => {},
})

/* --- useOrganisation() ----------------------------------------------------------------------- */

export const useOrganisation = () => ({
  isLoaded: true,
  organisation: null,
  setOrganisation: async () => {},
  getOrganisation: async () => {},
})

/* --- useOrganisationList() ------------------------------------------------------------------- */

export const useOrganisationList = () => ({
  isLoaded: true,
  organisationList: [],
  setOrganisationList: async () => {},
  getOrganisationList: async () => {},
})

/* --- useSession() ----------------------------------------------------------------------------- */

export const useSession = () => ({
  isLoaded: true,
  isSignedIn: false,
  session: null,
  user: null,
  signUp: {
    isLoaded: true,
    create: async () => {},
    prepareEmailAddressVerification: async () => {},
  },
  signIn: {
    isLoaded: true,
    create: async () => {},
  },
  signOut: {
    isLoaded: true,
    create: async () => {},
  },
  setActive: async () => {},
  getActive: async () => {},
})

/* --- useSignIn() ------------------------------------------------------------------------------ */

export const useSignIn = () => ({
  isLoaded: true,
  signIn: {
    isLoaded: true,
    create: async () => {},
  },
})

/* --- useSignUp() ------------------------------------------------------------------------------ */

export const useSignUp = () => ({
  isLoaded: true,
  signUp: {
    isLoaded: true,
    create: async () => {},
    prepareEmailAddressVerification: async () => {},
  },
})

/* --- useUser() ------------------------------------------------------------------------------- */

export const useUser = () => ({
  isLoaded: true,
  user: null,
  setUser: async () => {},
  getUser: async () => {},
})

/* --- useWarmUpBrowser() ---------------------------------------------------------------------- */

export const useWarmUpBrowser = () => {}
