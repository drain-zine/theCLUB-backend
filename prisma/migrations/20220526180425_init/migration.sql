/*
  Warnings:

  - You are about to drop the column `title` on the `Playlist` table. All the data in the column will be lost.
  - The `creationDate` column on the `Playlist` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `name` to the `Playlist` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Playlist" DROP COLUMN "title",
ADD COLUMN     "name" TEXT NOT NULL,
DROP COLUMN "creationDate",
ADD COLUMN     "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
