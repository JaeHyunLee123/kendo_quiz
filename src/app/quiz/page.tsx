"use client";

import ProblemInput from "@/components/ProblemInput";
import ProblemTitle from "@/components/ProblemTitle";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";

interface QuizForm {
  name: string;
  id: number;
}

const Quiz = ({}) => {
  const {} = useForm<QuizForm>();

  return (
    <main>
      <div>
        <ProblemTitle
          problemNumber={1}
          problemText="다음 빈칸에 알맞은 숫자를 기입하시오.(각 3점, 총 9점)"
        />
        <p className="indent-1">
          시합 시작 시 <span className="px-2 border-2 border-black">a</span>
          이후 허리칼을 하고
          <span className="px-2 border-2 border-black">b</span>보 걸어나오며
          뽑아칼을 한다.
        </p>
        <p className="indent-1">
          시합 종료 후 꽂아칼을 하고
          <span className="px-2 border-2 border-black">c</span>보 뒷걸음 후
          허리칼을 풀고 인사 후 시합장을 나간다.
        </p>
        <div className="flex items-center space-x-3">
          <ProblemInput id="1-a" inputWidth={12} labelText="A" />
          <ProblemInput id="1-b" inputWidth={12} labelText="B" />
          <ProblemInput id="1-c" inputWidth={12} labelText="C" />
        </div>
      </div>
    </main>
  );
};

export default Quiz;
