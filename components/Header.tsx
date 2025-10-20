"use client";
import Link from "next/link";
import { useState } from "react";

/** Two-row menu content */
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
  { href: "/admin/login", label: "Team Admin", emphasis: true }, // single, yellow
];

export default function Header() {
  const [open, setOpen] = useState(false);

  /** Fancy pill button (gradient + soft glow + swipe highlight) */
  const fancy =
    "group relative overflow-hidden rounded-xl px-3 py-2 text-sm border shadow-sm " +
    "border-white/10 bg-gradient-to-br from-white/10 via-white/5 to-white/0 " + // gentle glassy gradient
    "hover:from-white/20 hover:via-white/10 hover:to-white/5 " +
    "transition duration-300 will-change-transform active:scale-[.98] " +
    "before:absolute before:inset-0 before:rounded-[inherit] before:ring-1 before:ring-white/10 " +
    "after:content-[''] after:absolute after:top-0 after:-left-1/3 after:h-full after:w-1/3 " +
    "after:bg-white/30 after:opacity-0 after:rotate-12 after:blur-sm " +
    "group-hover:after:translate-x-[260%] group-hover:after:opacity-60 after:transition-all after:duration-500";

  /** Emphasis (Team Admin): gold gradient + dark text + glow */
  const fancyGold =
    "group relative overflow-hidden rounded-xl px-3 py-2 text-sm font-semibold text-[#0B1E34] " +
    "bg-gradient-to-br from-yellow-300 via-amber-300 to-yellow-400 shadow " +
    "hover:brightness-95 active:scale-[.98] " +
    "before:absolute before:inset-0 before:rounded-[inherit] before:ring-1 before:ring-amber-400/50 " +
    "after:content-[''] after:absolute after:top-0 after:-left-1/3 after:h-full after:w-1/3 " +
    "after:bg-white/60 after:opacity-0 after:rotate-12 after:blur-sm " +
    "group-hover:after:translate-x-[260%] group-hover:after:opacity-80 after:transition-all after:duration-500";

  return (
    <header className="sticky top-0 z-40 bg-[#0B1E34] text-white">
      <div className="container-default h-14 flex items-center justify-between">
        {/* Logo/brand toggles the menu */}
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
      </div>

      {/* Dropdown */}
      {open && (
        <div
          id="site-menu"
          className="bg-[#0B1E34]/98 backdrop-blur border-t border-white/10"
        >
          <nav className="container-default">
            {/* Row 1 */}
            <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 p-4 text-center">
              {ROW1.map((i) => (
                <Link
                  key={i.href}
                  href={i.href as any}
                  onClick={() => setOpen(false)}
                  className={fancy}
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
                  className={i.emphasis ? fancyGold : fancy}
                >
                  {i.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
