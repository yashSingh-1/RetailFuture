-- CreateTable
CREATE TABLE "BoughtAddress" (
    "id" TEXT NOT NULL,
    "ProductBought" TEXT NOT NULL,
    "UserWhichGeneratedTheAffilaitedLink" TEXT NOT NULL,
    "FlatOrHouse" TEXT NOT NULL,
    "City" TEXT NOT NULL,
    "Country" TEXT NOT NULL,
    "PinCode" TEXT NOT NULL,
    "PhoneNum" TEXT NOT NULL,
    "Email" TEXT NOT NULL,

    CONSTRAINT "BoughtAddress_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BoughtAddress_id_key" ON "BoughtAddress"("id");

-- AddForeignKey
ALTER TABLE "BoughtAddress" ADD CONSTRAINT "BoughtAddress_ProductBought_fkey" FOREIGN KEY ("ProductBought") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BoughtAddress" ADD CONSTRAINT "BoughtAddress_UserWhichGeneratedTheAffilaitedLink_fkey" FOREIGN KEY ("UserWhichGeneratedTheAffilaitedLink") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
