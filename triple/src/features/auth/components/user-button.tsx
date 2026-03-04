"use client";

import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/features/general/OR";
import { useCurrent } from "@/features/auth/api/use-current";
import { Loader, LogOut } from "lucide-react";
import { useLogout } from "@/features/auth/api/use-logout";

export const UserButton = () => {
  const { data: user, isLoading } = useCurrent();
  const { mutate: logout } = useLogout();

  if (isLoading) {
    return (
      <div className={"size-10 rounded-full flex items-center justify-center"}>
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
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className={"outline-none relative"}>
        <Avatar className={"size-10 hover:opacity-75 transition"}>
          <AvatarFallback
            className={
              "bg-foreground font-medium text-neutral-500 flex items-center justify-center"
            }
          >
            {avatarFallback}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align={"end"}
        side={"bottom"}
        className={"w-60"}
        sideOffset={10}
      >
        <div
          className={
            "flex flex-col items-center justify-center gap-2 px-2.5 py-4"
          }
        >
          <Avatar className={"size-13"}>
            <AvatarFallback
              className={
                "bg-foreground font-medium text-xl text-neutral-500 flex items-center justify-center"
              }
            >
              {avatarFallback}
            </AvatarFallback>
          </Avatar>
          <div className={"flex flex-col items-center justify-center"}>
            <p className={"text-sm font-medium"}>{name || "Triple User"}</p>
          </div>
        </div>
        <Separator label={"Account"} className={"mb-1"} />
        <DropdownMenuItem
          className={
            "h-10 flex items-center justify-center text-amber-700 font-medium cursor-pointer"
          }
          onClick={() => logout()}
        >
          <LogOut className={"size-4 mr-2 text-amber-700"} />
          Log Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
