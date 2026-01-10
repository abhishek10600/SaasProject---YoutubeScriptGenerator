"use client";

import { useState } from "react";
import Sidebar from "@/components/DashboardPageComponents/Sidebar";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-neutral-950 text-white overflow-hidden">
      {/* Desktop Sidebar */}
      <Sidebar open />

      {/* Mobile Sidebar */}
      {sidebarOpen && (
        <div className="fixed inset-0 z-50 flex">
          <Sidebar mobile onClose={() => setSidebarOpen(false)} />
          <div
            className="flex-1 bg-black/60"
            onClick={() => setSidebarOpen(false)}
          />
        </div>
      )}

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Header */}
        <header className="md:hidden flex items-center gap-2 p-4 border-b border-neutral-800">
          <Button
            size="icon"
            variant="ghost"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu />
          </Button>
          <span className="font-semibold">Dashboard</span>
        </header>

        <main className="flex-1 overflow-y-auto p-6">{children}</main>
      </div>
    </div>
  );
}
