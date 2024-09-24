import Explaination from "@/components/Explaination";
import ProblemTitle from "@/components/ProblemTitle";
import { Button } from "@/components/ui/Button";
import { db } from "@/lib/db";
import { QuizAnswer } from "@prisma/client";
import Link from "next/link";

export default async function Page({
  params,
}: {
  params: { studentId: string };
}) {
  let student;
  let studentAnswer;
  try {
    student = await db.user.findUnique({
      where: {
        studentId: parseInt(params.studentId),
      },
    });

    studentAnswer = await db.quizAnswer.findUnique({
      where: {
        studentId: parseInt(params.studentId),
      },
    });
  } catch (errors) {
    return <div>{String(errors)}</div>;
  }

  if (!student || !studentAnswer) {
    return <div>이 학번으로 제출된 답안이 없습니다.</div>;
  }

  const quizSolution: QuizAnswer = {
    studentId: student.studentId,
    oneA: 2,
    oneB: 3,
    oneC: 5,
    two: "기검체",
    threeA: 1,
    threeB: 2,
    threeC: 3,
    threeD: 1,
    fourA: true,
    fourB: true,
    fourC: true,
    fourD: false,
    fourE: false,
    fourF: false,
    fourG: true,
  };

  return (
    <main>
      <span className="text-xl">{`${student.name}님의 점수는 ${student.score}점입니다.`}</span>
      <p className="my-4">
        아래는 해설입니다.{" "}
        <span className="text-blue-500">맞춘 문제는 파란색</span>으로{" "}
        <span className="text-red-500">틀린 문제는 빨간색</span>으로 해설이
        적혀있습니다.
      </p>
      <div className="flex flex-col items-center space-y-2">
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
          <div className="flex space-x-2">
            <Explaination isRight={studentAnswer.oneA === quizSolution.oneA}>
              A: 2
            </Explaination>
            <Explaination isRight={studentAnswer.oneB === quizSolution.oneB}>
              B: 3
            </Explaination>
            <Explaination isRight={studentAnswer.oneC === quizSolution.oneC}>
              C: 5
            </Explaination>
          </div>

          <div className="w-full">
            <ProblemTitle
              problemNumber={2}
              problemText="검도 득점의 3요소를 기술하시오.(12점)"
            />
            <span className="block">
              {
                "hint) OOO일치, 부분점수없음, 복수정답없음, 순서도 맞춰야함, 정확히 3글자 기입"
              }
            </span>
            <Explaination isRight={studentAnswer.two === quizSolution.two}>
              {`기합을 의미하는 '기', 죽도의 타격을 의미하는 '검', 발구름 및 몸놀림을
              의미하는 '체'가 일치해야 득점으로 인정됩니다.`}
            </Explaination>
          </div>

          <div className="w-full">
            <ProblemTitle
              problemNumber={3}
              problemText="다음 심판의 자세와 취해야하는 행동을 올바르게 매치하시오.(각 6점, 총 24점)"
            />
            <div className="w-full border-2 border-black p-2 mb-3 flex flex-col space-y-1">
              <span className="text-lg">[심판의 자세]</span>
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
            <div className="flex space-x-3 w-full flex-col space-y-2 items-start sm:flex-row sm:items-center "></div>
          </div>

          <div className="flex space-x-2">
            <Explaination
              isRight={studentAnswer.threeA === quizSolution.threeA}
            >
              A: 1
            </Explaination>
            <Explaination
              isRight={studentAnswer.threeB === quizSolution.threeB}
            >
              B: 2
            </Explaination>
            <Explaination
              isRight={studentAnswer.threeC === quizSolution.threeC}
            >
              C: 3
            </Explaination>
            <Explaination
              isRight={studentAnswer.threeD === quizSolution.threeD}
            >
              D: 1
            </Explaination>
          </div>

          <div>
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
                이에 머리치기는 막았지만 장외로 넘어갈 것 같아 죽도로 경기장
                밖을 짚어 균형을 잡은{" "}
                <span className="underline font-bold">G. 준영</span>.
              </p>
            </div>

            <span className="text-red-500">반칙이 맞으면 O, 아니면 X</span>
            <div className="flex flex-col items-left space-x-2">
              <span>A. 하연:</span>
              <Explaination
                isRight={studentAnswer.fourA === quizSolution.fourA}
              >
                O, 시합 중 칼을 손으로 만지면 반칙입니다. 중혁을 바르게하고
                싶으면 손을 들어 심판에게 중지를 요청 후 고칩니다.
              </Explaination>
            </div>

            <div className="flex flex-col items-left space-x-2">
              <span>B. 다원:</span>
              <Explaination
                isRight={studentAnswer.fourB === quizSolution.fourB}
              >
                O, 검도 시합 중 세레모니는 금지되어 있습니다. 이 경우 득점은
                취소되고 반칙이 선언됩니다.
              </Explaination>
            </div>
            <div className="flex flex-col items-left space-x-2">
              <span>C. 준혁:</span>
              <Explaination
                isRight={studentAnswer.fourC === quizSolution.fourC}
              >
                O, 상대의 뒤를 노리는 것은 반칙입니다. 상대방이 뒤도는 순간을
                노려보세요.
              </Explaination>
            </div>

            <div className="flex flex-col items-left space-x-2">
              <span>D. 민욱: </span>
              <Explaination
                isRight={studentAnswer.fourD === quizSolution.fourD}
              >
                X, 넘어지는 것은 반칙이 아닙니다. 심판이 중지를 선언하면
                일어서서 시작 위치로 돌아갑니다.
              </Explaination>
            </div>

            <div className="flex flex-col items-left space-x-2">
              <span>E. 영일:</span>
              <Explaination
                isRight={studentAnswer.fourE === quizSolution.fourE}
              >
                X, 넘어진 상대를 심판이 중지를 외치기 전 타돌에 성공하면
                득점입니다.
              </Explaination>
            </div>

            <div className="flex flex-col items-left space-x-2">
              <span>F. 승후:</span>
              <Explaination
                isRight={studentAnswer.fourF === quizSolution.fourF}
              >
                X, 머리치기 후 올바르게 몸받음 한 것은 반칙이 아닙니다. 단,
                고의로 넘어뜨리거나 상대방을 장외시키기 위해 억지로 밀 경우
                반칙입니다.
              </Explaination>
            </div>

            <div className="flex flex-col items-left space-x-2">
              <span>G. 준영:</span>
              <Explaination
                isRight={studentAnswer.fourG === quizSolution.fourG}
              >
                O, 장외 기준은 신체 일부분이나 죽도가 경기장 바깥을 짚을 경우
                장외입니다.
              </Explaination>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-5">
        <Button>
          <Link href="/ranking">랭킹 보러 가기</Link>
        </Button>{" "}
      </div>
    </main>
  );
}
