"use client";

import { SignOutButton } from "@clerk/nextjs";
import { toast } from "sonner";
import { Button } from "../ui/button";
const SignOutLink = () => {
  const handleLogout = () => {
    toast.success("You have been signed out.");
  };

  return (
    <SignOutButton redirectUrl="/">
      <button
        className="w-full text-left cursor-pointer"
        onClick={handleLogout}
      >
        Signout
      </button>
    </SignOutButton>
  );
};

export default SignOutLink;
