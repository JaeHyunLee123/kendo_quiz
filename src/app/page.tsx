"use client";

import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isQuizClicked, setIsQuizClicked] = useState(false);
  const [isRankClicked, setIsRankClicked] = useState(false);

  return (
    <div className="flex flex-col space-y-2 justify-center items-center">
      <span>검도 퀴즈</span>
      <span>문제 풀고 상품 받아가세요</span>
      <span className="text-red-500 text-sm">
        링크 이동이 느리면 새로고침 후 다시 시도해주세요
      </span>
      <Button
        className="w-52"
        onClick={() => {
          setIsQuizClicked(true);
        }}
        disabled={isQuizClicked}
      >
        <Link href={"/quiz"}>
          {isQuizClicked ? "퀴즈로 이동 중..." : "퀴즈 풀러 가기"}
        </Link>
      </Button>
      <Button
        className="w-52"
        onClick={() => {
          setIsRankClicked(true);
        }}
        disabled={isRankClicked}
      >
        <Link href="/ranking">
          {isRankClicked ? "랭킹으로 이동 중..." : "랭킹 보러 가기"}
        </Link>
      </Button>
    </div>
  );
}
