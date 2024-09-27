"use client";

import ProblemInput from "@/components/ProblemInput";
import ProblemTitle from "@/components/ProblemTitle";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { postSubmitQuiz } from "@/app/action/submitQuiz";
import type { QuizForm } from "@/interface";
import ErrorMsg from "@/components/ErrorMsg";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Quiz = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<QuizForm>();

  const { mutate, isPending, data } = useMutation({
    mutationFn: postSubmitQuiz,
  });

  const [isIdDuplication, setIsIdDuplication] = useState(false);
  const [isServerError, setIsServerError] = useState(false);
  const [studentId, setStudentId] = useState(0);
  const [isSubmitOk, setIsSubmitOk] = useState(false);

  const router = useRouter();

  const onSubmit = (form: QuizForm) => {
    mutate(form);
    setStudentId(form.studentId);
    console.log(form);
  };

  useEffect(() => {
    if (!data) return;

    const { message } = data;

    if (message === "OK") {
      setIsSubmitOk(true);
      router.push(`/solution/${studentId}`);
    } else if (message === "StudentIdAlreadyExist") {
      setIsIdDuplication(true);
    } else if (message === "Unknown") {
      setIsServerError(true);
    }
  }, [data, router, studentId]);

  return (
    <main>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col items-center space-y-2"
      >
        <div className="w-full">
          <ProblemTitle
            problemNumber={1}
            problemText="다음 빈칸에 알맞은 숫자를 기입하시오.(각 5점, 총 15점)"
          />
          <div className="w-full border-2 border-black p-2 mb-3">
            <p className="indent-1">
              시합 시작 시 <span className="px-2 border-2 border-black">A</span>
              보 걸어나와 인사를 한 후 허리칼을 하고
              <span className="px-2 border-2 border-black">B</span>보 걸어나오며
              뽑아칼을 한다.
            </p>
            <p className="indent-1">
              시합 종료 후 꽂아칼을 하고
              <span className="px-2 border-2 border-black">C</span>보 뒷걸음 후
              허리칼을 풀고 인사 후 시합장을 나간다.
            </p>
          </div>

          <div className="flex space-x-3 w-full flex-col space-y-2 items-start sm:flex-row sm:items-center ">
            <ProblemInput
              id="1-a"
              labelText="A"
              inputType="number"
              {...register("quizAnswer.oneA", {
                valueAsNumber: true,
              })}
            />
            <ProblemInput
              id="1-b"
              labelText="B"
              inputType="number"
              {...register("quizAnswer.oneB", {
                valueAsNumber: true,
              })}
            />
            <ProblemInput
              id="1-c"
              labelText="C"
              inputType="number"
              {...register("quizAnswer.oneC", {
                valueAsNumber: true,
              })}
            />
          </div>
        </div>

        <div className="w-full">
          <ProblemTitle
            problemNumber={2}
            problemText="검도 득점의 3요소를 기술하시오.(12점)"
          />
          <span>
            {
              "hint) OOO일치, 부분점수없음, 복수정답없음, 순서도 맞춰야함, 정확히 3글자 기입"
            }
          </span>
          <Input {...register("quizAnswer.two")} />
        </div>

        <div className="w-full">
          <ProblemTitle
            problemNumber={3}
            problemText="다음 심판의 행동 취해야하는 행동을 올바르게 매치하시오.(각 6점, 총 24점)"
          />
          <div className="w-full border-2 border-black p-2 mb-3 flex flex-col space-y-1">
            <span className="text-lg">[심판의 행동]</span>
            <span>A. 득점을 한 선수의 기를 비스듬히 위로 올린다.</span>
            <span>B. 반칙을 한 선수의 기를 비스듬히 아래로 내린다.</span>
            <span>
              C. 코등이 싸움 중 양기를 앞으로 낸다. (앞으로 나란히 자세).
            </span>
            <span>D. 양기를 똑바로 위로 올린다.</span>
          </div>
          <div className="w-full border-2 border-black p-2 mb-3 flex flex-col space-y-1">
            <span className="text-lg">
              [취해야하는 행동 (보기 하나는 2개에 매치됨)]
            </span>
            <span>1) 시작 위치로 돌아간 후 상대에게 중단을 취한다.</span>
            <span>
              2) 시작 위치로 돌아간 후 쉬어칼을 한 후 주심에게 목례한 후
              상대에게 중단을 취한다.
            </span>
            <span>
              3) 현재 위치에서 그대로 뒤로 물러나며 상대에게 중단을 취한다.
            </span>
          </div>
          <div className="flex space-x-3 w-full flex-col space-y-2 items-start sm:flex-row sm:items-center ">
            <ProblemInput
              id="3-a"
              labelText="A"
              inputType="number"
              {...register("quizAnswer.threeA", { valueAsNumber: true })}
            />
            <ProblemInput
              id="3-b"
              labelText="B"
              inputType="number"
              {...register("quizAnswer.threeB", { valueAsNumber: true })}
            />
            <ProblemInput
              id="3-c"
              labelText="C"
              inputType="number"
              {...register("quizAnswer.threeC", { valueAsNumber: true })}
            />
            <ProblemInput
              id="3-d"
              labelText="D"
              inputType="number"
              {...register("quizAnswer.threeD", { valueAsNumber: true })}
            />
          </div>
        </div>

        <div className="w-full">
          <ProblemTitle
            problemNumber={4}
            problemText="다음 글을 읽고 밑줄 친 인물이 반칙을 했는지 안했는지 고르시오.(각 7점, 총 49점)"
          />
          <div className="w-full border-2 border-black p-2">
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
              <span className="underline font-bold">D. 민욱</span>. 이 틈을
              놓치지 않고 넘어진 민욱의 머리를 친{" "}
              <span className="underline font-bold">E. 영일</span>
            </p>
            <p className="inset-1">
              장외선 거의 끝에 몰린 준영을 보고, 머리치기 후 몸받음을 통해
              준영을 민 <span className="underline font-bold">F. 승후</span>.
              이에 머리치기는 막았지만 장외로 넘어갈 것 같아 죽도로 경기장 밖을
              짚어 균형을 잡은{" "}
              <span className="underline font-bold">G. 준영</span>.
            </p>
          </div>

          <span className="text-red-500">반칙이 맞으면 O, 아니면 X</span>
          <fieldset className="flex items-center space-x-2">
            <span>A. 하연:</span>
            <input
              type="radio"
              value="O"
              id="fourATrue"
              {...register("quizAnswer.fourA")}
            />
            <label htmlFor="fourATrue">O</label>
            <input
              type="radio"
              value="X"
              id="fourAFalse"
              {...register("quizAnswer.fourA")}
            />
            <label htmlFor="fourAFalse">X</label>
          </fieldset>

          <fieldset className="flex items-center space-x-2">
            <span>B. 다원:</span>
            <input
              type="radio"
              value="O"
              id="fourBTrue"
              {...register("quizAnswer.fourB")}
            />
            <label htmlFor="fourBTrue">O</label>
            <input
              type="radio"
              value="X"
              id="fourBFalse"
              {...register("quizAnswer.fourB")}
            />
            <label htmlFor="fourBFalse">X</label>
          </fieldset>
          <fieldset className="flex items-center space-x-2">
            <span>C. 준혁:</span>
            <input
              type="radio"
              value="O"
              id="fourCTrue"
              {...register("quizAnswer.fourC")}
            />
            <label htmlFor="fourCTrue">O</label>
            <input
              type="radio"
              value="X"
              id="fourCFalse"
              {...register("quizAnswer.fourC")}
            />
            <label htmlFor="fourCFalse">X</label>
          </fieldset>

          <fieldset className="flex items-center space-x-2">
            <span>D. 민욱:</span>
            <input
              type="radio"
              value="O"
              id="fourDTrue"
              {...register("quizAnswer.fourD")}
            />
            <label htmlFor="fourDTrue">O</label>
            <input
              type="radio"
              value="X"
              id="fourDFalse"
              {...register("quizAnswer.fourD")}
            />
            <label htmlFor="fourDFalse">X</label>
          </fieldset>

          <fieldset className="flex items-center space-x-2">
            <span>E. 영일:</span>
            <input
              type="radio"
              value="O"
              id="fourETrue"
              {...register("quizAnswer.fourE")}
            />
            <label htmlFor="fourETrue">O</label>
            <input
              type="radio"
              value="X"
              id="fourEFalse"
              {...register("quizAnswer.fourE")}
            />
            <label htmlFor="fourEFalse">X</label>
          </fieldset>

          <fieldset className="flex items-center space-x-2">
            <span>F. 승후:</span>
            <input
              type="radio"
              value="O"
              id="fourFTrue"
              {...register("quizAnswer.fourF")}
            />
            <label htmlFor="fourFTrue">O</label>
            <input
              type="radio"
              value="X"
              id="fourFFalse"
              {...register("quizAnswer.fourF")}
            />
            <label htmlFor="fourFFalse">X</label>
          </fieldset>

          <fieldset className="flex items-center space-x-2">
            <span>G. 준영:</span>
            <input
              type="radio"
              value="O"
              id="fourGTrue"
              {...register("quizAnswer.fourG")}
            />
            <label htmlFor="fourGTrue">O</label>
            <input
              type="radio"
              value="X"
              id="fourGFalse"
              {...register("quizAnswer.fourG")}
            />
            <label htmlFor="fourGFalse">X</label>
          </fieldset>
        </div>

        <div className="w-full space-y-2">
          <div className="flex items-center space-x-1">
            <Label htmlFor="name">이름</Label>
            <Input
              id="name"
              className="w-50"
              {...register("name", {
                required: "이름을 입력해주세요.",
                maxLength: {
                  value: 10,
                  message: "2글자 이상 10글자 이하로 입력해주세요.",
                },
                minLength: {
                  value: 2,
                  message: "2글자 이상 10글자 이하로 입력해주세요.",
                },
              })}
            />
            <ErrorMsg>{errors.name ? errors.name.message : ""}</ErrorMsg>
          </div>
          <div className="flex items-center space-x-1">
            <Label htmlFor="school-id">학번</Label>
            <Input
              id="school-id"
              type="number"
              className="w-50"
              {...register("studentId", {
                required: "학번을 입력해주세요.",
                min: {
                  value: 1000000000,
                  message: "올바른 형식의 학번을 입력하세요.",
                },
                max: {
                  value: 5000000000,
                  message: "올바른 형식의 학번을 입력하세요.",
                },
              })}
            />
            <ErrorMsg>
              {errors.studentId ? errors.studentId.message : ""}
            </ErrorMsg>
            <ErrorMsg>
              {isIdDuplication ? "이 학번은 이미 존재합니다." : ""}
            </ErrorMsg>
          </div>
        </div>
        <Button className="w-[70%]" disabled={isPending || isSubmitOk}>
          {isSubmitOk
            ? "정답페이지로 넘어가는 중..."
            : isPending
            ? "제출중..."
            : "제출하기"}
        </Button>
        <ErrorMsg>
          {isServerError
            ? "알 수 없는 서버 에러가 발생했습니다. 잠시후 다시 제출해주세요."
            : ""}
        </ErrorMsg>
      </form>
    </main>
  );
};

export default Quiz;
