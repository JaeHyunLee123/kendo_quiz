"use server";

import type { QuizForm } from "@/interface";
import { db } from "@/lib/db";
import { gradeQuiz } from "@/lib/utils";
import { Prisma } from "@prisma/client";

type actionMessage = "OK" | "StudentIdAlreadyExist" | "Unknown";

export const postSubmitQuiz = async (
  quizForm: QuizForm
): Promise<{ status: number; message: actionMessage }> => {
  console.log("Start server action");

  const score = gradeQuiz(quizForm.quizAnswer);

  console.log("Score: " + score);

  try {
    console.log("Create new User");

    const studentId = Number(quizForm.studentId);

    const submitTime = new Date();
    await db.user.create({
      data: {
        name: quizForm.name,
        studentId,
        score,
        submitTime,
      },
    });

    //Todo: Post Answer
  } catch (error) {
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      // Check for unique constraint violation (P2002 error code)
      if (error.code === "P2002") {
        console.error("A user with this studentId already exists.");

        return { status: 400, message: "StudentIdAlreadyExist" };
      }
    }

    console.error(error);

    return { status: 500, message: "Unknown" };
  }

  return { status: 200, message: "OK" };
};
