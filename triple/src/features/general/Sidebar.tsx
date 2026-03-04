"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Navigation } from "@/features/general/Navigation";
import { ThemeSwitcher } from "@/features/general/themeswitcher";
import { UserButton } from "@/features/auth/components/user-button";
import { Separator } from "@/features/general/OR";
import { ChevronLeft, ChevronRight } from "lucide-react";

type SidebarProps = {
  collapsed: boolean;
  setCollapsed: (value: boolean) => void;
};

const Sidebar = ({ collapsed, setCollapsed }: SidebarProps) => {
  // Collapsed rail content (arrow lives here, not overlapping main content)
  if (collapsed) {
    return (
      <aside className="h-full w-full flex items-start justify-center pt-4">
        <button
          onClick={() => setCollapsed(false)}
          className="p-2 rounded-md hover:bg-muted"
          aria-label="Expand sidebar"
        >
          <ChevronRight size={20} />
        </button>
      </aside>
    );
  }

  return (
    <aside className="h-full p-4 w-full relative">
      <button
        onClick={() => setCollapsed(true)}
        className="absolute right-2 top-4 p-1 rounded hover:bg-muted"
        aria-label="Collapse sidebar"
      >
        <ChevronLeft size={20} />
      </button>

      <Link href={"/"}>
        <Image
          src="/logo.png"
          height={50}
          width={200}
          alt="logo"
          className="block dark:hidden"
        />
        <Image
          src="/logo-dark.png"
          height={50}
          width={200}
          alt="logo"
          className="hidden dark:block"
        />
      </Link>

      <div className="flex justify-between items-center mb-3">
        <UserButton />
        <Separator label="" />
        <ThemeSwitcher />
      </div>

      <Navigation />
    </aside>
  );
};

export default Sidebar;
