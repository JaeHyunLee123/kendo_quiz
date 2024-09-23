import { QuizAnswer } from "@/interface";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface QuizScore {
  oneA: number;
  oneB: number;
  oneC: number;
  two: number;
  threeA: number;
  threeB: number;
  threeC: number;
  threeD: number;
  fourA: number;
  fourB: number;
  fourC: number;
  fourD: number;
  fourE: number;
  fourF: number;
  fourG: number;
}

export const gradeQuiz = (studentAnswer: QuizAnswer) => {
  let score = 0;

  const quizSolution: QuizAnswer = {
    oneA: 2,
    oneB: 3,
    oneC: 5,
    two: "기검체",
    threeA: 1,
    threeB: 2,
    threeC: 3,
    threeD: 1,
    fourA: "O",
    fourB: "O",
    fourC: "O",
    fourD: "X",
    fourE: "X",
    fourF: "X",
    fourG: "O",
  };

  const quizScore: QuizScore = {
    oneA: 5,
    oneB: 5,
    oneC: 5,
    two: 12,
    threeA: 6,
    threeB: 6,
    threeC: 6,
    threeD: 6,
    fourA: 7,
    fourB: 7,
    fourC: 7,
    fourD: 7,
    fourE: 7,
    fourF: 7,
    fourG: 7,
  };

  for (const key in studentAnswer) {
    if (
      studentAnswer[key as keyof QuizAnswer] ===
      quizSolution[key as keyof QuizAnswer]
    ) {
      score += quizScore[key as keyof QuizScore];
    }
  }

  return score;
};
