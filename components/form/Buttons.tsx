"use client";

import { useFormStatus } from "react-dom";
import { Button } from "../ui/button";
import { Spinner } from "@/components/ui/spinner";
import { SignInButton } from "@clerk/nextjs";
import { FaHeart, FaRegHeart } from "react-icons/fa";

type btnSize = "default" | "lg" | "sm";

type SubmitButtonPros = {
  className?: string;
  text?: string;
  size?: btnSize;
};

export const SubmitButton = ({
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

export const CardSignInButton = () => {
  return (
    <SignInButton mode="modal">
      <Button
        type="button"
        size="icon"
        variant="outline"
        className="p-2 cursor pointer"
        asChild
      >
        <FaRegHeart />
      </Button>
    </SignInButton>
  );
};

export const CardSubmitButton = ({ isFavorite }: { isFavorite: boolean }) => {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      size="icon"
      variant="outline"
      className="p-2 cursor-pointer"
    >
      {pending ? (
        <Spinner className="animate-spin" />
      ) : isFavorite ? (
        <FaHeart />
      ) : (
        <FaRegHeart />
      )}
    </Button>
  );
};
