import { FC } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/Input";
import { cn } from "@/lib/utils";

interface ProblemInputProps {
  id: string;
  inputWidth?: number;
  labelText: string;
}

const ProblemInput: FC<ProblemInputProps> = ({ id, inputWidth, labelText }) => {
  return (
    <div className="flex space-x-1 items-center">
      <Label htmlFor={id} className="text-lg">
        {labelText}
      </Label>
      <Input
        id={id}
        className={cn("text-lg", inputWidth ? `w-${inputWidth}` : 0)}
      />
    </div>
  );
};

export default ProblemInput;
