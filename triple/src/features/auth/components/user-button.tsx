"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/features/general/OR";
import { useCurrent } from "@/features/auth/api/use-current";
import { Loader } from "lucide-react";

export const UserButton = () => {
  const { data: user, isLoading } = useCurrent();

  if (isLoading) {
    return (
      <div
        className={
          "size-10 rounded-full flex items-center justify-center bg-background border border-border"
        }
      >
        <Loader className={"size-4 animate-spin text-muted-foreground"} />
      </div>
    );
  }

  if (!user) {
    return null;
  }

  const { name, email } = user;

  const avatarFallback = name
    ? name.charAt(0).toUpperCase()
    : (email.charAt(0).toUpperCase() ?? "T");

  return (
    <Avatar
      className={"size-10 hover:opacity-75 transition border border-foreground"}
    >
      <AvatarFallback
        className={"bg-accent-foreground font-medium text-neutral-500"}
      >
        {avatarFallback}
      </AvatarFallback>
    </Avatar>
  );
};
