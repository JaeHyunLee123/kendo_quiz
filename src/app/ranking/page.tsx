import { db } from "@/lib/db";

const Ranking = async () => {
  const ranking = await db.user.findMany({});

  if (!ranking) {
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
      {ranking.map((student, i) => (
        <div key={i} className="space-x-2">
          <span>{`${i + 1}등`}</span>
          <span>{student.name}</span>
          <span>{`${student.score}점`}</span>
          <span>{`${student.submitTime
            .toISOString()
            .slice(0, 10)} ${student.submitTime
            .toISOString()
            .slice(11, 19)} 제출`}</span>
        </div>
      ))}
    </main>
  );
};

export default Ranking;
