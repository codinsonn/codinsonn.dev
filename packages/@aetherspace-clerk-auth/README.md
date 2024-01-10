<img src="/packages/@aetherspace/assets/AetherspaceLogo.svg" width="50" height="50" />

<p>
    <a href="https://clerk.com/" target="_blank">
        <img alt="Clerk Auth Logo" longdesc="Cross Platform Auth with Clerk" src="https://camo.githubusercontent.com/02b3799f98edbed5bafa868dbd884287f249d3153e53c34b3c05855adf2478a2/68747470733a2f2f696d672e736869656c64732e696f2f7374617469632f76313f7374796c653d666f722d7468652d6261646765266d6573736167653d436c65726b26636f6c6f723d364334374646266c6f676f3d436c65726b266c6f676f436f6c6f723d464646464646266c6162656c3d" />
    </a>
</p>

# `@aetherspace/clerk-auth` - Aetherspace Plugin

Prerequisites:
- [Sponsor Aetherspace on Github](https://github.com/Aetherspace/green-stack-starter-demo#readme) or get access to it some other way
- Fork or generate a new repository from the official or free [aetherspace/green-stack-starter](https://github.com/Aetherspace/green-stack-starter#readme) github repo
- Choose the "✅ Include all branches" option during the fork / generation process

```shell
git merge with/clerk-auth
```

After a yarn install, you'll be able to use `@aetherspace/clerk-auth` to import a bunch of handy clerk auth  helpers:

```shell
│── apps/
│   └── nextjs/
│       └── middleware.ts/ # ➡️ Clerk auth middleware already set up for you
│
│── packages/
│   └── @aetherspace-clerk-auth/
│       └── schemas/ # ➡️ Zod schemas for clerk datastructures to re-use for types, resolvers & docs
│       └── context/ # ➡️ Universal context for clerk on web & native
│       └── hooks/ # ➡️ Universal hooks for clerk on web & native
│       └── middleware/ # ➡️ SWR middleware to ensure clerk auth headers are included on mobile
│       └── utils/ # ➡️ Utils to create auth related request context in Next.js middleware
│       └── components/ # ➡️ Handy universal components like a SignOutButton you can make your own
```

We'll also set you up with a `features/user-managment` workspace for some example integration code:

```shell
│── features/
│   └── user-managment/ # ➡️ importable from 'user-management'
│       └── schemas/ # ➡️ Zod schemas for state management & auth request context
│       └── hooks/ # ➡️ Typed form states for the clerk based auth forms
│       └── screens/ # ➡️ Example SignIn, SignUp, UserInfo screens
│       └── routes/ # ➡️ Example routes for /sign-in, /sign-up, /me
│       └── resolvers/ # ➡️ Retrieve user data from the request context
``````

