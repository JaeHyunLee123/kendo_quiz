export interface QuizAnswer {
  oneA: number;
  oneB: number;
  oneC: number;
  two: string;
  threeA: number;
  threeB: number;
  threeC: number;
  threeD: number;
  fourA: "O" | "X";
  fourB: "O" | "X";
  fourC: "O" | "X";
  fourD: "O" | "X";
  fourE: "O" | "X";
  fourF: "O" | "X";
  fourG: "O" | "X";
}

export interface QuizForm {
  quizAnswer: QuizAnswer;
  name: string;
  studentId: number;
}
