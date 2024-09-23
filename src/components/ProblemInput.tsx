import { Label } from "./ui/Label";
import { Input } from "./ui/Input";
import { UseFormRegister } from "react-hook-form";

import { forwardRef } from "react";
import { QuizForm } from "@/interface";

interface ProblemInputProps {
  id: string;
  labelText: string;
  register?: ReturnType<UseFormRegister<QuizForm>>;
  inputType?: "string" | "number";
  isTrueFalse?: boolean;
}

const ProblemInput = forwardRef<HTMLInputElement, ProblemInputProps>(
  ({ id, labelText, register, inputType = "string", ...rest }, ref) => {
    return (
      <div className="flex space-x-1 items-center justify-center">
        <Label htmlFor={id} className="text-lg">
          {labelText}
        </Label>

        <Input
          id={id}
          ref={ref}
          className={"text-lg, w-40"}
          {...register}
          {...rest}
          type={inputType}
        />
      </div>
    );
  }
);

ProblemInput.displayName = "ProblemInput";

export default ProblemInput;
