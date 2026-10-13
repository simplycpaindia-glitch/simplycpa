-- AlterTable
ALTER TABLE "JournalPost" ADD COLUMN     "aiCategories" TEXT[] DEFAULT ARRAY[]::TEXT[],
ADD COLUMN     "aiModel" TEXT,
ADD COLUMN     "aiReason" TEXT,
ADD COLUMN     "aiVerdict" TEXT,
ADD COLUMN     "studyHours" DOUBLE PRECISION;
