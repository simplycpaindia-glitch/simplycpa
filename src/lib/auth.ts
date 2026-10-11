import NextAuth, { CredentialsSignin } from "next-auth";
import type { Provider } from "next-auth/providers";
import Credentials from "next-auth/providers/credentials";
import Google from "next-auth/providers/google";
import { PrismaAdapter } from "@auth/prisma-adapter";
import bcrypt from "bcryptjs";
import { prisma } from "@/lib/prisma";
import { clientIp, clientUserAgent, hashIp, hashLoginCode, safeEqualHex } from "@/lib/journal/security";

/** Wrong guesses allowed per sign-in code before it is burned. */
export const MAX_CODE_ATTEMPTS = 5;

class InvalidCode extends CredentialsSignin {
  code = "invalid_code";
}
class ExpiredCode extends CredentialsSignin {
  code = "expired_code";
}
class TooManyAttempts extends CredentialsSignin {
  code = "too_many_attempts";
}

export const isGoogleConfigured = !!process.env.AUTH_GOOGLE_ID && !!process.env.AUTH_GOOGLE_SECRET;

const providers: Provider[] = [
  Credentials({
    id: "credentials",
    name: "Email and password",
    credentials: {
      email: { label: "Email", type: "email" },
      password: { label: "Password", type: "password" },
    },
    authorize: async (credentials) => {
      const email = credentials?.email;
      const password = credentials?.password;
      if (typeof email !== "string" || typeof password !== "string") {
        return null;
      }

      const user = await prisma.user.findUnique({ where: { email } });
      if (!user?.password) return null;

      const valid = await bcrypt.compare(password, user.password);
      if (!valid) return null;

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        role: user.role,
        tier: user.tier,
      };
    },
  }),

  // Passwordless sign-in with a 6-digit code emailed by requestEmailCode().
  // Proving control of the inbox is enough to sign in to (or create) the account
  // for that address.
  Credentials({
    id: "email-code",
    name: "Email code",
    credentials: {
      email: { label: "Email", type: "email" },
      code: { label: "Code", type: "text" },
    },
    authorize: async (credentials) => {
      const email = typeof credentials?.email === "string" ? credentials.email.trim().toLowerCase() : "";
      const code = typeof credentials?.code === "string" ? credentials.code.replace(/\s/g, "") : "";
      if (!email || !/^\d{6}$/.test(code)) throw new InvalidCode();

      const record = await prisma.emailLoginCode.findFirst({
        where: { email, usedAt: null },
        orderBy: { createdAt: "desc" },
      });
      if (!record || record.expiresAt < new Date()) throw new ExpiredCode();
      // Reserve an attempt atomically before comparing, so parallel guesses can't
      // exceed the limit.
      const reserved = await prisma.emailLoginCode.updateMany({
        where: { id: record.id, usedAt: null, attempts: { lt: MAX_CODE_ATTEMPTS } },
        data: { attempts: { increment: 1 } },
      });
      if (reserved.count !== 1) throw new TooManyAttempts();

      if (!safeEqualHex(record.codeHash, hashLoginCode(email, code))) {
        if (record.attempts + 1 >= MAX_CODE_ATTEMPTS) throw new TooManyAttempts();
        throw new InvalidCode();
      }

      // Consume the code atomically so it can't be used twice in a race.
      const consumed = await prisma.emailLoginCode.updateMany({
        where: { id: record.id, usedAt: null },
        data: { usedAt: new Date() },
      });
      if (consumed.count !== 1) throw new ExpiredCode();

      const now = new Date();
      const user = await prisma.user.upsert({
        where: { email },
        create: { email, emailVerified: now },
        update: { emailVerified: now },
      });

      return {
        id: user.id,
        name: user.name,
        email: user.email,
        image: user.image,
        role: user.role,
        tier: user.tier,
      };
    },
  }),
];

if (isGoogleConfigured) {
  providers.push(
    Google({
      // Google only issues verified addresses, so a Google sign-in for an email that
      // already has an account (from a code or password sign-in) is linked to it.
      allowDangerousEmailAccountLinking: true,
    }),
  );
}

export const { handlers, auth, signIn, signOut } = NextAuth({
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  pages: {
    signIn: "/login",
  },
  providers,
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        token.id = user.id as string;
        token.role = (user as { role?: string }).role ?? "STUDENT";
        token.tier = (user as { tier?: string }).tier ?? "FREE";
      }
      return token;
    },
    session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as string;
        session.user.role = token.role as string;
        session.user.tier = token.tier as string;
      }
      return session;
    },
  },
  events: {
    // Keep a record of every successful sign-in (method, time, hashed IP, browser).
    async signIn({ user, account, isNewUser }) {
      if (!user?.id) return;
      try {
        const created = await prisma.user.findUnique({ where: { id: user.id }, select: { createdAt: true } });
        await prisma.signInEvent.create({
          data: {
            userId: user.id,
            method: account?.provider === "credentials" ? "password" : (account?.provider ?? "unknown"),
            isNewUser: isNewUser ?? (created ? Date.now() - created.createdAt.getTime() < 60_000 : false),
            ipHash: hashIp(await clientIp()),
            userAgent: await clientUserAgent(),
          },
        });
      } catch (err) {
        // Never block a sign-in because the audit record failed — but make it visible.
        console.error("Failed to record sign-in event", err);
      }
    },
  },
});
