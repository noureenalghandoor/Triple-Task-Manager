"use client";

import React, { useState } from "react";
import Sidebar from "@/features/general/Sidebar";
import Navbar from "@/features/general/Navbar";

interface DashboardProps {
  children: React.ReactNode;
}

const SIDEBAR_WIDTH = 260; // expanded
const COLLAPSED_RAIL = 52; // small left rail for the arrow (px)

const DashboardLayout = ({ children }: DashboardProps) => {
  const [collapsed, setCollapsed] = useState(false);

  const leftSpace = collapsed ? COLLAPSED_RAIL : SIDEBAR_WIDTH;

  return (
    <div className="min-h-screen">
      <div className="flex w-full h-full">
        {/* Sidebar / Rail */}
        <div
          className="fixed left-0 top-0 h-full overflow-hidden z-40 hidden lg:block
                     transition-all duration-300 ease-in-out"
          style={{ width: leftSpace }}
        >
          <Sidebar collapsed={collapsed} setCollapsed={setCollapsed} />
        </div>

        {/* Main content shifts smoothly */}
        <div
          className="w-full transition-all duration-300 ease-in-out"
          style={{ paddingLeft: leftSpace }}
        >
          <div className="mx-auto max-w-screen-2xl h-full">
            <Navbar />
            <main className="h-full py-8 px-6 flex flex-col">{children}</main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
