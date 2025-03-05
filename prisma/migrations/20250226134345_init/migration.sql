/*
  Warnings:

  - You are about to drop the `Questions` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Questions";

-- CreateTable
CREATE TABLE "riddles" (
    "id" SERIAL NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,

    CONSTRAINT "riddles_pkey" PRIMARY KEY ("id")
);
