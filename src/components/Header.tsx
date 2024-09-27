"use client";

import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/Button";

const Header: FC = ({}) => {
  return (
    <header className="flex space-x-3 border-b-2 border-black pb-1">
      <Button variant={"ghost"} className="text-base">
        <Link href="/">{"Home"}</Link>
      </Button>
      <Button variant={"ghost"} className="text-base">
        <Link href="/quiz">{"Quiz"}</Link>
      </Button>
      <Button variant={"ghost"} className="text-base">
        <Link href="/ranking">{"Ranking"}</Link>
      </Button>
    </header>
  );
};

export default Header;
