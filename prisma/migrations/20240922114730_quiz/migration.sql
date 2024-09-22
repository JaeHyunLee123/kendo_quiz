-- CreateTable
CREATE TABLE "QuizAnswer" (
    "studentId" INTEGER NOT NULL,
    "oneA" INTEGER NOT NULL,
    "oneB" INTEGER NOT NULL,
    "oneC" INTEGER NOT NULL,
    "two" TEXT NOT NULL,
    "threeA" INTEGER NOT NULL,
    "threeB" INTEGER NOT NULL,
    "threeC" INTEGER NOT NULL,
    "threeD" INTEGER NOT NULL,
    "fourA" BOOLEAN NOT NULL,
    "fourB" BOOLEAN NOT NULL,
    "fourC" BOOLEAN NOT NULL,
    "fourD" BOOLEAN NOT NULL,
    "fourE" BOOLEAN NOT NULL,
    "fourF" BOOLEAN NOT NULL,
    "fourG" BOOLEAN NOT NULL,

    CONSTRAINT "QuizAnswer_pkey" PRIMARY KEY ("studentId")
);

-- AddForeignKey
ALTER TABLE "QuizAnswer" ADD CONSTRAINT "QuizAnswer_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "User"("studentId") ON DELETE RESTRICT ON UPDATE CASCADE;
