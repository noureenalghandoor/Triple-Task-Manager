"use client";

import React from "react";
import { Sheet, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";

const MobileSidebar = () => {
  return (
    <Sheet modal={false}>
      <SheetTrigger asChild>
        <Button variant={"secondary"} className={"lg:hidden"}>
          <MenuIcon />
        </Button>
      </SheetTrigger>
    </Sheet>
  );
};
export default MobileSidebar;
