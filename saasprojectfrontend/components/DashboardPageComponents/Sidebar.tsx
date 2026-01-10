"use client";

import { cn } from "@/lib/utils";
import { LayoutDashboard, Wand2, Settings, LogOut, X } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", icon: LayoutDashboard, href: "/dashboard" },
  { label: "Script Generator", icon: Wand2, href: "/dashboard/scripts" },
  { label: "Settings", icon: Settings, href: "/dashboard/settings" },
];

export default function Sidebar({
  open,
  mobile,
  onClose,
}: {
  open?: boolean;
  mobile?: boolean;
  onClose?: () => void;
}) {
  return (
    <aside
      className={cn(
        "bg-neutral-900 border-r border-neutral-800 flex flex-col",
        mobile ? "w-72 h-full p-4" : "hidden md:flex md:w-64 p-6"
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <span className="text-lg font-semibold tracking-wide">Dashboard</span>
        {mobile && (
          <Button size="icon" variant="ghost" onClick={onClose}>
            <X />
          </Button>
        )}
      </div>

      {/* Nav */}
      <nav className="flex-1 space-y-2">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="flex items-center gap-3 rounded-md px-3 py-2 text-sm text-neutral-300 hover:bg-neutral-800 hover:text-white transition"
          >
            <item.icon size={18} />
            {item.label}
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <Button className="flex items-center gap-3 text-sm text-neutral-400 hover:text-white transition">
        <LogOut size={18} />
        Logout
      </Button>
    </aside>
  );
}
