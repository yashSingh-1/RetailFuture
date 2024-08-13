-- CreateTable
CREATE TABLE "Review" (
    "id" TEXT NOT NULL,
    "parentProductId" TEXT NOT NULL,
    "ReviewStory" TEXT NOT NULL,
    "NameOfReviewer" TEXT NOT NULL,
    "StarsAwarded" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Review_id_key" ON "Review"("id");

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_parentProductId_fkey" FOREIGN KEY ("parentProductId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
