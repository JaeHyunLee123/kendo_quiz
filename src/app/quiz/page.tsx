"use client";

import ProblemInput from "@/components/ProblemInput";
import ProblemTitle from "@/components/ProblemTitle";
import { Button } from "@/components/ui/Button";
import { useForm } from "react-hook-form";

interface QuizAnswer {
  oneA: number;
  oneB: number;
  oneC: number;
}

export interface QuizForm {
  quizAnswer: QuizAnswer;
  name: string;
  id: number;
}

const Quiz = ({}) => {
  const { register, handleSubmit } = useForm<QuizForm>();

  const onSubmit = (form: QuizForm) => {
    console.log(form);
  };

  return (
    <main>
      <form onSubmit={handleSubmit(onSubmit)}>
        <ProblemTitle
          problemNumber={1}
          problemText="다음 빈칸에 알맞은 숫자를 기입하시오.(각 3점, 총 9점)"
        />
        <p className="indent-1">
          시합 시작 시 <span className="px-2 border-2 border-black">A</span>
          이후 허리칼을 하고
          <span className="px-2 border-2 border-black">B</span>보 걸어나오며
          뽑아칼을 한다.
        </p>
        <p className="indent-1">
          시합 종료 후 꽂아칼을 하고
          <span className="px-2 border-2 border-black">C</span>보 뒷걸음 후
          허리칼을 풀고 인사 후 시합장을 나간다.
        </p>
        <div className="flex items-center space-x-3">
          <ProblemInput
            id="1-a"
            inputWidth={12}
            labelText="A"
            {...register("quizAnswer.oneA", { valueAsNumber: true })}
          />
          <ProblemInput
            id="1-b"
            inputWidth={12}
            labelText="B"
            {...register("quizAnswer.oneB", { valueAsNumber: true })}
          />
          <ProblemInput
            id="1-c"
            inputWidth={12}
            labelText="C"
            {...register("quizAnswer.oneC", { valueAsNumber: true })}
          />
        </div>

        <Button>Submit</Button>
      </form>
    </main>
  );
};

export default Quiz;
