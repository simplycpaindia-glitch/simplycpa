# SimplyCPA

A research-backed US CPA Exam study platform built for Indian CA students, commerce graduates, and working professionals — study material, revision notes, MCQ practice, and a real admin CMS, organized around the actual CPA Exam structure (3 Core sections + 1 Discipline).

Non-technical? See [CONTENT-MANAGEMENT-GUIDE.md](CONTENT-MANAGEMENT-GUIDE.md) instead — it covers everyday editing without touching any code. For the research and content assumptions behind the seed data, see [docs/RESEARCH.md](docs/RESEARCH.md).

## Tech stack

- **Next.js 16** (App Router) + **TypeScript**, Tailwind CSS v4
- **PostgreSQL** via **Prisma ORM 7** (driver-adapter architecture — see note below)
- **Auth.js (NextAuth v5)** with the Prisma adapter, Credentials provider
- **Tiptap** rich text editor for admin content, sanitized with `sanitize-html` before storage
- Deployment target: **Vercel**

> **Note on Prisma 7:** this version of Prisma moved connection configuration out of `schema.prisma` and into `prisma.config.ts`, and generates the client into `src/generated/prisma` (via driver adapters like `@prisma/adapter-pg`) instead of `node_modules/@prisma/client`. If you're used to older Prisma versions, don't be surprised by this — it's intentional, not a misconfiguration.

## Project structure

```
prisma/
  schema.prisma          # data model
  seed.ts                # seed script orchestrator
  seed-data/              # actual seed content (FAR, AUD, REG, BAR, ISC, TCP, FAQs, blog, fees...)
src/
  app/
    (site)/               # public site — homepage, /cpa/*, /blog, /faq, /login, /dashboard, ...
    admin/                # staff-only CMS
    api/auth/             # Auth.js route handler
  components/
    ui/                   # design-system primitives (Button, Card, Badge, Tabs, Accordion...)
    home/, practice/, discussion/, faq/, fees/, admin/, content/, auth/, site/
  lib/
    actions/              # Server Actions (mutations)
    auth.ts, dal.ts        # Auth.js config + server-side authorization helpers
    prisma.ts             # Prisma client singleton (driver-adapter setup)
    sanitize.ts            # HTML allow-list for admin-authored content
  generated/prisma/        # generated Prisma Client (not checked in — see .gitignore)
proxy.ts                   # route protection for /admin and /dashboard (Next 16 renamed "middleware" to "proxy")
```

## Setup

### 1. Prerequisites

- Node.js 20.9+ (this project was built with Node 24)
- A PostgreSQL database — the easiest path is a free [Neon](https://neon.tech) project; any Postgres connection string works

### 2. Install dependencies

```bash
npm install
```

### 3. Environment variables

Copy `.env.example` to `.env` and fill in the values:

```bash
DATABASE_URL="postgresql://user:password@host/dbname?sslmode=require"
AUTH_SECRET="run: openssl rand -base64 32"
NEXT_PUBLIC_SITE_URL="http://localhost:3000"

# Optional — controls the admin account created by the seed script
SEED_ADMIN_EMAIL="admin@example.com"
SEED_ADMIN_PASSWORD="choose-a-real-password"
```

### 4. Database setup

```bash
npm run db:generate   # generate the Prisma Client into src/generated/prisma
npm run db:migrate    # create tables (prompts for a migration name on first run)
npm run db:seed       # populate subjects, topics, study material, MCQs, FAQs, blog, fees, sources
```

### 5. Run the dev server

```bash
npm run dev
```

Visit `http://localhost:3000`. Log in at `/login` with the admin email/password from your `.env` (or the defaults `admin@simplycpa.local` / `ChangeMe123!` if you didn't set them — **change this password immediately if you seed a real environment with the defaults**).

### 6. Admin access

The seed script creates one `ADMIN` user. To promote another user to staff access, either:

- Use Prisma Studio (`npm run db:studio`) to change their `role` field to `EDITOR`, `MODERATOR`, or `ADMIN`, or
- Have an existing Admin do it once a proper "Users" admin screen is built (not included in V1 — see "What's not built yet" below).

## Common tasks

| Task | Command / place |
|---|---|
| Add a subject/topic, edit content, manage MCQs, moderate comments | `/admin` — see [CONTENT-MANAGEMENT-GUIDE.md](CONTENT-MANAGEMENT-GUIDE.md) |
| Regenerate Prisma Client after a schema change | `npm run db:generate` |
| Create a new migration after a schema change | `npm run db:migrate` |
| Inspect/edit raw data | `npm run db:studio` |
| Re-run the seed script (safe — uses upserts) | `npm run db:seed` |
| Lint | `npm run lint` |
| Production build | `npm run build` |

## Deployment (Vercel)

1. Push this repo to GitHub.
2. Import it into Vercel.
3. Set the environment variables from `.env.example` in the Vercel project settings (`DATABASE_URL`, `AUTH_SECRET`, `NEXT_PUBLIC_SITE_URL` set to your production domain).
4. Add a Vercel "Build Command" override if you want migrations to run on deploy: `npx prisma migrate deploy && npm run build`. Do **not** run `prisma migrate dev` or `db:seed` automatically in production builds — apply migrations deliberately and seed only once per environment.

## What's built in V1

Homepage, all 6 CPA sections with real topic structures, full study material + revision notes + MCQs for FAR (flagship), one fully-worked demo topic each for AUD/REG/BAR/ISC/TCP, an MCQ practice engine (server-graded, answers never sent to the client before submission), per-topic discussion/comments, FAQ + blog + CPA Radar + Fee Estimator + Indian-candidates guide, authentication with role-based admin access, a real admin CMS (subjects, topics, Study Material/Revision Notes editors with independent versioning, MCQ CRUD + CSV bulk import, blog/FAQ CRUD, comment moderation, source manager), SEO (sitemap, robots, JSON-LD), and responsive design throughout.

## What's not built yet (by design — see docs/RESEARCH.md and the approved build plan)

- Payments/subscriptions (schema has a `Tier` field ready for this)
- Full TBS (task-based simulation) engine beyond MCQs
- AI assistant / RAG-based "Ask CPA" feature (schema's `ContentStatus.AI_DRAFT` is ready for an AI drafting pipeline)
- Personal private notes
- Admin screens for Fees/Jurisdictions/Testing Locations/Updates (edit via `prisma/seed-data/facts.ts` + reseed, or Prisma Studio, for now)
- Mock exam mode with a timer/full-screen exam UI (the practice engine supports topic-level sets today; mock exams reuse the same `PracticeSession`/`MCQAttempt` models and are a natural extension)
- A "Users" admin screen (promote/demote roles via Prisma Studio for now)
