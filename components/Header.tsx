"use client";
import Link from "next/link";
import { useState } from "react";

const ROW1 = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/programs/autos", label: "Autos" },
  { href: "/programs/investment", label: "Investment" },
  { href: "/partnerships", label: "Partnerships" },
];

const ROW2 = [
  { href: "/programs/community-support", label: "Community Support" },
  { href: "/careers", label: "Careers" },
  { href: "/resources", label: "Resources" },
  { href: "/donation", label: "Donation" },
  { href: "/about", label: "About" },
  // Team Admin ALWAYS last in row2, single instance
  { href: "/admin/login", label: "Team Admin", emphasis: true },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const menuBtn =
    "rounded-lg px-3 py-2 bg-white/5 hover:bg-white/10 text-sm border border-white/10 shadow-sm transition active:scale-[.98]";

  return (
    <header className="sticky top-0 z-40 bg-[#0B1E34] text-white">
      <div className="container-default h-14 flex items-center justify-between">
        {/* Logo + brand (tap opens menu) */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex items-center gap-2"
          aria-expanded={open}
          aria-controls="site-menu"
        >
          <span className="w-9 h-9 rounded-full bg-white grid place-items-center overflow-hidden">
            <img src="/logo.png" className="w-7 h-7 object-contain" alt="Bsons Inc logo" />
          </span>
          <span className="font-display text-lg md:text-xl font-semibold tracking-wide">
            Bsons Inc.
          </span>
          {/* vertical hamburger (three short dashes) */}
          <span className="ml-1 grid gap-1">
            <span className="block w-3.5 h-0.5 bg-white rounded"></span>
            <span className="block w-3.5 h-0.5 bg-white rounded"></span>
            <span className="block w-3.5 h-0.5 bg-white rounded"></span>
          </span>
        </button>

        {/* dark dropdown under header */}
        {open && (
          <div
            id="site-menu"
            className="absolute left-0 right-0 top-14 bg-[#0B1E34]/98 backdrop-blur border-t border-white/10"
          >
            <nav className="container-default">
              {/* Row 1 */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 p-4 text-center">
                {ROW1.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href as any}
                    className={menuBtn}
                    onClick={() => setOpen(false)}
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
              {/* Row 2 */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 p-4 text-center border-t border-white/10">
                {ROW2.map((i) => (
                  <Link
                    key={i.href}
                    href={i.href as any}
                    onClick={() => setOpen(false)}
                    className={
                      i.emphasis
                        ? "rounded-lg px-3 py-2 bg-yellow-400 text-[#0B1E34] font-semibold text-sm shadow hover:brightness-95"
                        : menuBtn
                    }
                  >
                    {i.label}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
