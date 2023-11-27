/*
  Warnings:

  - Changed the type of `category` on the `Record` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "CategoryType" AS ENUM ('HOUSING', 'TRANSPORTATION', 'UTILITIES', 'FOOD_GROCERIES', 'HEALTHCARE', 'EDUCATION', 'ENTERTAINMENT', 'PERSONAL_CARE', 'SAVINGS_INVESTMENTS', 'DEBT_REPAYMENT');

-- AlterTable
ALTER TABLE "Record" DROP COLUMN "category",
ADD COLUMN     "category" "CategoryType" NOT NULL;

-- DropEnum
DROP TYPE "Category";
