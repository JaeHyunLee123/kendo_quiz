import { Label } from "./ui/label";
import { Input } from "./ui/Input";
import { cn } from "@/lib/utils";
import { UseFormRegister } from "react-hook-form";
import { QuizForm } from "@/app/quiz/page";
import { forwardRef } from "react";

interface ProblemInputProps {
  id: string;
  inputWidth?: number;
  labelText: string;
  register?: ReturnType<UseFormRegister<QuizForm>>;
}

const ProblemInput = forwardRef<HTMLInputElement, ProblemInputProps>(
  ({ id, inputWidth, labelText, register, ...rest }, ref) => {
    return (
      <div className="flex space-x-1 items-center">
        <Label htmlFor={id} className="text-lg">
          {labelText}
        </Label>
        <Input
          id={id}
          ref={ref}
          className={cn("text-lg", inputWidth ? `w-${inputWidth}` : "")}
          {...register}
          {...rest}
        />
      </div>
    );
  }
);

ProblemInput.displayName = "ProblemInput";

export default ProblemInput;
