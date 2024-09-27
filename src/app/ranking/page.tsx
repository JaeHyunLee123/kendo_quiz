// ranking/page.tsx
import NavigatingBtn from "@/components/NavigatingBtn";
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
      <main className="flex flex-col justify-center items-center">
        <span className="text-sm">
          랭킹은 점수 순, 점수가 같으면 제출 시간 순으로 매깁니다.
        </span>
        <div className="space-y-2 my-3">
          {ranking.map((student, i) => (
            <div key={i} className="space-x-2">
              <span>{`${i + 1}등`}</span>
              <span>{student.name}</span>
              <span>{`${student.score}점`}</span>
              <span>{`${
                student.submitTime
                  ? new Date(student.submitTime).toLocaleString("ko-KR", {
                      month: "2-digit",
                      day: "2-digit",
                      hour: "2-digit",
                      minute: "2-digit",
                      second: "2-digit",
                      hour12: false, // To use 24-hour format
                      timeZone: "Asia/Seoul", // Set to Korea Standard Time
                    })
                  : "N/A"
              } 제출
`}</span>
            </div>
          ))}
        </div>

        <NavigatingBtn href="/" text="홈으로 가기" />
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
