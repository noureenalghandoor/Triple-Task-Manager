import React from "react";
import Link from "next/link";
import {
  GoCheckCircle,
  GoCheckCircleFill,
  GoHome,
  GoHomeFill,
} from "react-icons/go";
import { SettingsIcon, Users2 } from "lucide-react";
import { cn } from "@/lib/utils";

const routes = [
  {
    label: "Home",
    href: "/",
    icon: GoHome,
    activeIcon: GoHomeFill,
  },
  {
    label: "My Tasks",
    href: "/tasks",
    icon: GoCheckCircle,
    activeIcon: GoCheckCircleFill,
  },
  {
    label: "Settings",
    href: "/settings",
    icon: SettingsIcon,
    activeIcon: SettingsIcon,
  },
  {
    label: "Members",
    href: "/members",
    icon: Users2,
    activeIcon: Users2,
  },
];

export const Navigation = () => {
  return (
    <ul className="flex flex-col gap-y-2">
      {routes.map((item) => {
        const isActive = false;
        const Icon = isActive ? item.activeIcon : item.icon;

        return (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-x-2 p-2 rounded-md hover:opacity-75"
          >
            <div
              className={cn(
                "w-full flex items-center gap-2.5 p-2.5 rounded-md hover:opacity-75 transition",
                isActive &&
                  "bg-green-400 shadow-sm hover:opacity-100 text-background",
              )}
            >
              <Icon className={cn("size-5", isActive && "text-background")} />
              <span>{item.label}</span>
            </div>
          </Link>
        );
      })}
    </ul>
  );
};
