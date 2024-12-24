/*
  Warnings:

  - You are about to drop the column `letter` on the `Letter` table. All the data in the column will be lost.
  - Added the required column `letter_content` to the `Letter` table without a default value. This is not possible if the table is not empty.
  - Added the required column `letter_title` to the `Letter` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Letter" DROP COLUMN "letter",
ADD COLUMN     "letter_content" TEXT NOT NULL,
ADD COLUMN     "letter_title" TEXT NOT NULL;
