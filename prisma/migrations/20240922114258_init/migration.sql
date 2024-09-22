-- CreateTable
CREATE TABLE "User" (
    "studentId" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "submitTime" TIMESTAMP(3) NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("studentId")
);
