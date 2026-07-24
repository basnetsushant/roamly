"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Spinner } from "@/components/ui/spinner";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonPros = {
  className?: string;
  text?: string;
  size?: btnSize;
};

const SubmitButton = ({
  className = "",
  text = "Submit",
  size = "lg",
}: SubmitButtonPros) => {
  const { pending } = useFormStatus();
  return (
    <Button
      className={`capitalize cursor-pointer  ${className}`}
      type="submit"
      disabled={pending}
      size={size}
    >
      {pending ? (
        <>
          {/* <IoReload className="mr-2 h-4 w-4 animate-spin" /> */}
          <Spinner className="mr-2 h-4 w-4 animate-spin" />
          Please Wait...
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default SubmitButton;
