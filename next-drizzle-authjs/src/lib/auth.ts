import NextAuth from "next-auth";
import { db } from "@/lib/db";
import * as schema from "@/lib/schema";
import Passkey from "next-auth/providers/passkey";
import { DrizzleAdapter } from "@auth/drizzle-adapter";

export const { handlers, signIn, signOut, auth } = NextAuth({
  trustHost: true,
  useSecureCookies: false,
  basePath: "/auth",
  experimental: { enableWebAuthn: true },
  session: {
    strategy: "jwt",
  },
  adapter: DrizzleAdapter(db, {
    usersTable: schema.users,
    sessionsTable: schema.sessions,
    verificationTokensTable: schema.verificationTokens,
    accountsTable: schema.accounts,
    authenticatorsTable: schema.authenticators,
  }),
  providers: [Passkey],
});
