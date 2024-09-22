import { Button } from "@/components/ui/Button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col space-y-2">
      <span>검도 퀴즈</span>
      <span>문제 풀고 상품 받아가세요</span>
      <Button>
        <Link href={"/quiz"}>퀴즈 풀러 가기!</Link>
      </Button>
      <Button>
        <Link href="/ranking">랭킹 보러 가기</Link>
      </Button>
    </div>
  );
}
