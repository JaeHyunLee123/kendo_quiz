"use client";
import { FC, useState } from "react";
import { Button } from "./ui/Button";
import Link from "next/link";

interface NavigatingBtnProps {
  classname?: string;
  text: string;
  href: string;
}

const NavigatingBtn: FC<NavigatingBtnProps> = ({ classname, text, href }) => {
  const [isNavigating, setIsNavigating] = useState(false);

  return (
    <Button
      className={classname}
      onClick={() => {
        setIsNavigating(true);
      }}
      disabled={isNavigating}
    >
      <Link href={href}>
        {isNavigating ? "다음 페이지로 이동 중..." : text}
      </Link>
    </Button>
  );
};

export default NavigatingBtn;
