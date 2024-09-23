import React, { FC } from "react";

interface ErrorMsgProps {
  children: React.ReactNode;
}

const ErrorMsg: FC<ErrorMsgProps> = ({ children }) => {
  return <span className="text-red-500 text-sm">{children}</span>;
};

export default ErrorMsg;
