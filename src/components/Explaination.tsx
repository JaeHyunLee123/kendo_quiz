import { cn } from "@/lib/utils";
import React, { FC } from "react";

interface ExplainationProps {
  isRight: boolean;
  children: React.ReactNode;
}

const Explaination: FC<ExplainationProps> = ({ isRight, children }) => {
  return (
    <span className={cn(isRight ? "text-blue-500" : "text-red-500", "text-lg")}>
      {children}
    </span>
  );
};

export default Explaination;
