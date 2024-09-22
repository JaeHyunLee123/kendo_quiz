"use client";

import ProblemInput from "@/components/ProblemInput";
import ProblemTitle from "@/components/ProblemTitle";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { useForm } from "react-hook-form";

interface QuizAnswer {
  oneA: number;
  oneB: number;
  oneC: number;
  two: string;
  fourA: boolean;
  fourB: boolean;
  fourC: boolean;
  fourD: boolean;
  fourE: boolean;
  fourF: boolean;
  fourG: boolean;
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
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center space-y-2"
      >
        <div>
          <ProblemTitle
            problemNumber={1}
            problemText="다음 빈칸에 알맞은 숫자를 기입하시오.(각 5점, 총 15점)"
          />
          <p className="indent-1">
            시합 시작 시 <span className="px-2 border-2 border-black">A</span>보
            걸어나와 인사를 한 후 허리칼을 하고
            <span className="px-2 border-2 border-black">B</span>보 걸어나오며
            뽑아칼을 한다.
          </p>
          <p className="indent-1">
            시합 종료 후 꽂아칼을 하고
            <span className="px-2 border-2 border-black">C</span>보 뒷걸음 후
            허리칼을 풀고 인사 후 시합장을 나간다.
          </p>
          <div className="flex items-center space-x-3 w-full">
            <ProblemInput
              id="1-a"
              inputWidth={12}
              labelText="A"
              inputType="number"
              {...register("quizAnswer.oneA", { valueAsNumber: true })}
            />
            <ProblemInput
              id="1-b"
              inputWidth={12}
              labelText="B"
              inputType="number"
              {...register("quizAnswer.oneB", { valueAsNumber: true })}
            />
            <ProblemInput
              id="1-c"
              inputWidth={12}
              labelText="C"
              inputType="number"
              {...register("quizAnswer.oneC", { valueAsNumber: true })}
            />
          </div>
        </div>

        <div className="w-full">
          <ProblemTitle
            problemNumber={2}
            problemText="검도 득점의 3요소를 기술하시오.(15점)"
          />
          <span>
            {"hint) OOO일치, 부분점수없음, 복수정답없음, 순서도 맞춰야함"}
          </span>
          <Input {...register("quizAnswer.two")} />
        </div>

        <div>
          <ProblemTitle
            problemNumber={3}
            problemText="다음 심판의 자세와 취해야하는 행동을 올바르게 매치하시오.(각 7점, 총 28점)"
          />
        </div>

        <div>
          <ProblemTitle
            problemNumber={4}
            problemText="다음 글을 읽고 밑줄 친 인물이 반칙을 했는지 안했는지 고르시오.(각 6점, 총 42점)"
          />
          <p className="inset-1">
            시합 중 중혁이 돌아가 이를 손으로 바르게 고친{" "}
            <span className="underline font-bold">A. 하연</span>
          </p>
          <p className="inset-1">
            득점 후 너무 신난 나머지 환호를 지른{" "}
            <span className="underline font-bold">B. 다원</span>
          </p>
          <p className="inset-1">
            치고 나가는 상대방의 뒤통수 머리를 노린{" "}
            <span className="underline font-bold">C. 준혁</span>
          </p>
          <p className="inset-1">
            시합 중 발이 미끄러져 넘어진{" "}
            <span className="underline font-bold">D. 민욱</span>. 이 틈을 놓치지
            않고 넘어진 민욱의 머리를 친{" "}
            <span className="underline font-bold">E. 영일</span>
          </p>
          <p className="inset-1">
            장외선 거의 끝에 몰린 준영을 보고, 머리치기 후 몸받음을 통해 준영을
            민 <span className="underline font-bold">F. 승후</span>. 이에
            머리치기는 막았지만 장외로 넘어갈 것 같아 죽도로 경기장 밖을 짚어
            균형을 잡은 <span className="underline font-bold">G. 준영</span>.
          </p>
        </div>

        <Button className="w-[70%]">Submit</Button>
      </form>
    </main>
  );
};

export default Quiz;
