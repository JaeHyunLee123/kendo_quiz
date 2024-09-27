// ranking/page.tsx
import { db } from "@/lib/db";
import { cookies } from "next/headers";

const Ranking = async () => {
  //just for dynamic render
  const cookie = cookies();
  console.log(cookie);
  try {
    const ranking = await db.user.findMany({});

    if (!ranking || ranking.length === 0) {
      return <div>아직 답을 제출한 사람이 없습니다.</div>;
    }

    ranking.sort((a, b) => {
      if (a.score > b.score) {
        return -1;
      } else if (a.score < b.score) {
        return 1;
      } else {
        if (a.submitTime < b.submitTime) {
          return -1;
        } else {
          return 1;
        }
      }
    });

    return (
      <main>
        <span className="text-sm">
          랭킹은 점수 순, 점수가 같으면 제출 시간 순으로 매깁니다.
        </span>
        {ranking.map((student, i) => (
          <div key={i} className="space-x-2">
            <span>{`${i + 1}등`}</span>
            <span>{student.name}</span>
            <span>{`${student.score}점`}</span>
            <span>{`${
              student.submitTime
                ? student.submitTime.toISOString().slice(5, 10)
                : "N/A"
            } ${
              student.submitTime
                ? student.submitTime.toISOString().slice(11, 19)
                : ""
            } 제출`}</span>
          </div>
        ))}
      </main>
    );
  } catch (error) {
    console.error("Failed to load ranking:", error);
    return (
      <div>
        데이터를 불러오는 중 오류가 발생했습니다. 잠시후 새로고침 해주세요.
      </div>
    );
  }
};

export default Ranking;
