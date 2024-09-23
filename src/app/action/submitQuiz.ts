"use server";

import type { QuizForm } from "@/interface";
import { db } from "@/lib/db";
import { gradeQuiz } from "@/lib/utils";
import { Prisma } from "@prisma/client";

export const postSubmitQuiz = async (
  quizForm: QuizForm
): Promise<{ status: number; errorMsg?: string }> => {
  const score = gradeQuiz(quizForm.quizAnswer);

  try {
    await db.user.create({
      data: {
        name: quizForm.name,
        studentId: quizForm.studentId,
        score,
        submitTime: new Date(),
      },
    });
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Check for unique constraint violation (P2002 error code)
      if (error.code === "P2002") {
        console.error("A user with this studentId already exists.");

        return { status: 400, errorMsg: "This student id is already exist" };
      }
    }

    return { status: 500, errorMsg: "Unknown error" };
  }

  return { status: 200 };
};
