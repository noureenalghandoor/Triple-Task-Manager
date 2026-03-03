"use client";

import React from "react";
import Image from "next/image";
import { ThemeSwitcher } from "@/features/general/themeswitcher";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/dist/client/components/navigation";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { CheckCircle2Icon, InfoIcon } from "lucide-react";

interface AuthLayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: AuthLayoutProps) => {
  const pathname = usePathname();

  return (
    <main className="min-h-screen">
      <div className="max-w-screen-2xl p-4 mx-auto">
        <nav className={"flex justify-between items-center"}>
          <Image
            src="/logo.png"
            height={50}
            width={200}
            alt="logo"
            className="block dark:hidden"
          />

          {/* Dark logo */}
          <Image
            src="/logo-dark.png"
            height={50}
            width={200}
            alt="logo"
            className="hidden dark:block"
          />

          <div className="grid w-full max-w-md items-start gap-4"></div>

          <div className="flex gap-2 items-center">
            {pathname === "/sign-in"
              ? "Don't have an account yet?"
              : "Have an account already?"}
            <Button asChild type="button" variant="outline">
              <Link href={pathname === "/sign-in" ? "/sign-up" : "/sign-in"}>
                {pathname === "/sign-in" ? "Sign Up" : "Login"}
              </Link>
            </Button>
            <Button asChild type="button" variant="outline">
              <Link href={"/"}>Home</Link>
            </Button>
            <ThemeSwitcher />
          </div>
        </nav>

        <div className="flex flex-col items-center justify-center pt-4 md:pt-14">
          {children}
        </div>
      </div>
    </main>
  );
};
export default Layout;
