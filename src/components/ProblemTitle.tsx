import React, { FC } from "react";

interface ProblemTitleProps {
  problemNumber: number;
  problemText: string;
}

const ProblemTitle: FC<ProblemTitleProps> = ({
  problemText,
  problemNumber,
}) => {
  return (
    <div>
      <span className="text-xl">{`${problemNumber}. `}</span>
      <span className="text-lg">{problemText}</span>
    </div>
  );
};

export default ProblemTitle;
