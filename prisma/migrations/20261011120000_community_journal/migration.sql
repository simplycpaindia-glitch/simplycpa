-- CreateEnum
CREATE TYPE "JournalTag" AS ENUM ('GENERAL', 'FAR', 'AUD', 'REG', 'BAR', 'ISC', 'TCP', 'EXAM_DEBRIEF');

-- CreateEnum
CREATE TYPE "JournalPostStatus" AS ENUM ('PUBLISHED', 'HELD_FOR_REVIEW', 'HIDDEN_BY_REPORTS', 'REMOVED');

-- CreateEnum
CREATE TYPE "JournalReportReason" AS ENUM ('SPAM', 'SEXUAL', 'OFFENSIVE', 'HARASSMENT', 'EXAM_CONTENT', 'OFF_TOPIC', 'OTHER');

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "ageConfirmedAt" TIMESTAMP(3),
ADD COLUMN     "bannedAt" TIMESTAMP(3),
ADD COLUMN     "bannedReason" TEXT,
ADD COLUMN     "guidelinesAcceptedAt" TIMESTAMP(3),
ADD COLUMN     "guidelinesVersion" TEXT,
ADD COLUMN     "isBanned" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "marketingOptIn" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "marketingOptInAt" TIMESTAMP(3),
ADD COLUMN     "username" TEXT;

-- CreateTable
CREATE TABLE "JournalPost" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "tag" "JournalTag" NOT NULL DEFAULT 'GENERAL',
    "status" "JournalPostStatus" NOT NULL DEFAULT 'PUBLISHED',
    "flagReasons" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "contentHash" TEXT NOT NULL,
    "reviewedAt" TIMESTAMP(3),
    "reviewedBy" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "JournalPost_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JournalReaction" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JournalReaction_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "JournalReport" (
    "id" TEXT NOT NULL,
    "postId" TEXT NOT NULL,
    "reporterId" TEXT NOT NULL,
    "reason" "JournalReportReason" NOT NULL,
    "details" TEXT,
    "resolvedAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "JournalReport_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BlockedPostAttempt" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "reasons" TEXT[],
    "excerpt" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BlockedPostAttempt_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "EmailLoginCode" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "codeHash" TEXT NOT NULL,
    "expiresAt" TIMESTAMP(3) NOT NULL,
    "attempts" INTEGER NOT NULL DEFAULT 0,
    "usedAt" TIMESTAMP(3),
    "ipHash" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EmailLoginCode_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SignInEvent" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "method" TEXT NOT NULL,
    "isNewUser" BOOLEAN NOT NULL DEFAULT false,
    "ipHash" TEXT,
    "userAgent" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SignInEvent_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "JournalPost_status_createdAt_idx" ON "JournalPost"("status", "createdAt");

-- CreateIndex
CREATE INDEX "JournalPost_userId_createdAt_idx" ON "JournalPost"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "JournalPost_tag_status_createdAt_idx" ON "JournalPost"("tag", "status", "createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "JournalReaction_postId_userId_key" ON "JournalReaction"("postId", "userId");

-- CreateIndex
CREATE INDEX "JournalReport_resolvedAt_idx" ON "JournalReport"("resolvedAt");

-- CreateIndex
CREATE UNIQUE INDEX "JournalReport_postId_reporterId_key" ON "JournalReport"("postId", "reporterId");

-- CreateIndex
CREATE INDEX "BlockedPostAttempt_userId_createdAt_idx" ON "BlockedPostAttempt"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "BlockedPostAttempt_createdAt_idx" ON "BlockedPostAttempt"("createdAt");

-- CreateIndex
CREATE INDEX "EmailLoginCode_email_createdAt_idx" ON "EmailLoginCode"("email", "createdAt");

-- CreateIndex
CREATE INDEX "EmailLoginCode_ipHash_createdAt_idx" ON "EmailLoginCode"("ipHash", "createdAt");

-- CreateIndex
CREATE INDEX "SignInEvent_userId_createdAt_idx" ON "SignInEvent"("userId", "createdAt");

-- CreateIndex
CREATE INDEX "SignInEvent_createdAt_idx" ON "SignInEvent"("createdAt");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- AddForeignKey
ALTER TABLE "JournalPost" ADD CONSTRAINT "JournalPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JournalReaction" ADD CONSTRAINT "JournalReaction_postId_fkey" FOREIGN KEY ("postId") REFERENCES "JournalPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JournalReaction" ADD CONSTRAINT "JournalReaction_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JournalReport" ADD CONSTRAINT "JournalReport_postId_fkey" FOREIGN KEY ("postId") REFERENCES "JournalPost"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "JournalReport" ADD CONSTRAINT "JournalReport_reporterId_fkey" FOREIGN KEY ("reporterId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BlockedPostAttempt" ADD CONSTRAINT "BlockedPostAttempt_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "SignInEvent" ADD CONSTRAINT "SignInEvent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
