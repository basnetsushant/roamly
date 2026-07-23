"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Spinner } from "@/components/ui/spinner";

type SubmitButtonPros = {
  className?: string;
  text?: string;
};

const SubmitButton = ({
  className = "",
  text = "Submit",
}: SubmitButtonPros) => {
  const { pending } = useFormStatus();
  return (
    <Button
      className={`capitalize  ${className}`}
      type="submit"
      disabled={pending}
      size="lg"
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
