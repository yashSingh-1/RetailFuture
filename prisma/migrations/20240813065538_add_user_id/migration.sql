/*
  Warnings:

  - Added the required column `UserReviewerId` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "UserReviewerId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_UserReviewerId_fkey" FOREIGN KEY ("UserReviewerId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
