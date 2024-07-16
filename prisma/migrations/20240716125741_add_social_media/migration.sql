/*
  Warnings:

  - You are about to drop the column `userTwitter` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `userYoutube` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "userTwitter",
DROP COLUMN "userYoutube",
ADD COLUMN     "userLinkedin" TEXT,
ADD COLUMN     "userTwitter" TEXT;
