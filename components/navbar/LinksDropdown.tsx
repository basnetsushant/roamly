"use client";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { links } from "@/utils/links";
import { UserIcon } from "lucide-react";
import Link from "next/link";
import { LuAlignLeft } from "react-icons/lu";
import SignOutLink from "./SignOutLink";
import {
  useSignIn,
  useSignUp,
  SignInButton,
  SignUpButton,
  Show,
} from "@clerk/nextjs";

const LinksDropdown = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className="flex gap-4 max-w-25 cursor-pointer"
        >
          <LuAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        className="w-52"
        align="start"
        sideOffset={10}
      >
        <Show when={"signed-out"}>
          <DropdownMenuItem>
            <SignInButton mode="modal">
              <button className="w-full text-left cursor-pointer">Login</button>
            </SignInButton>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <SignUpButton mode="modal">
              <button className="w-full text-left cursor-pointer">
                Register
              </button>
            </SignUpButton>
          </DropdownMenuItem>
        </Show>
        <Show when="signed-in">
          {links.map((link) => {
            return (
              <DropdownMenuItem key={link.href}>
                <Link
                  href={link.href}
                  className="w-full cursor-pointer capitalize"
                >
                  {link.label}
                </Link>
              </DropdownMenuItem>
            );
          })}

          <DropdownMenuSeparator />

          <DropdownMenuItem>
            <SignOutLink />
          </DropdownMenuItem>
        </Show>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default LinksDropdown;
