/*
  Warnings:

  - The `typeOfCustomer` column on the `User` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- CreateEnum
CREATE TYPE "TypesOfCustomer" AS ENUM ('AffilateUser', 'SalesMan');

-- AlterTable
ALTER TABLE "User" DROP COLUMN "typeOfCustomer",
ADD COLUMN     "typeOfCustomer" "TypesOfCustomer";
