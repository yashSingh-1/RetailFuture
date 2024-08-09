-- CreateEnum
CREATE TYPE "TypesOfCustomer" AS ENUM ('AffilateUser', 'SalesMan');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "typeOfCustomer" "TypesOfCustomer" NOT NULL,
    "userIdClerk" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_userIdClerk_key" ON "User"("userIdClerk");
