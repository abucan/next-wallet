/*
  Warnings:

  - The values [HOUSE,CAR,HOSPITAL] on the enum `Category` will be removed. If these variants are still used in the database, this will fail.
  - Changed the type of `type` on the `Account` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `recordType` on the `Record` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "RecordType" AS ENUM ('EXPENSE', 'INCOME');

-- CreateEnum
CREATE TYPE "AccountType" AS ENUM ('BANK_ACCOUNT', 'CREDIT_CARD', 'SAVINGS', 'CHECKING', 'INVESTMENT', 'LOAN', 'RETIREMENT', 'CRYPTO', 'EMERGENCY_FUND');

-- AlterEnum
BEGIN;
CREATE TYPE "Category_new" AS ENUM ('HOUSING', 'TRANSPORTATION', 'UTILITIES', 'FOOD_GROCERIES', 'HEALTHCARE', 'EDUCATION', 'ENTERTAINMENT', 'PERSONAL_CARE', 'SAVINGS_INVESTMENTS', 'DEBT_REPAYMENT');
ALTER TABLE "Record" ALTER COLUMN "category" TYPE "Category_new" USING ("category"::text::"Category_new");
ALTER TYPE "Category" RENAME TO "Category_old";
ALTER TYPE "Category_new" RENAME TO "Category";
DROP TYPE "Category_old";
COMMIT;

-- AlterTable
ALTER TABLE "Account" DROP COLUMN "type",
ADD COLUMN     "type" "AccountType" NOT NULL;

-- AlterTable
ALTER TABLE "Record" DROP COLUMN "recordType",
ADD COLUMN     "recordType" "RecordType" NOT NULL;
