/*
  Warnings:

  - Changed the type of `category` on the `Record` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('HOUSE', 'CAR', 'HOSPITAL');

-- AlterTable
ALTER TABLE "Record" DROP COLUMN "category",
ADD COLUMN     "category" "Category" NOT NULL;
