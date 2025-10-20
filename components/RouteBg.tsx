"use client";
import { usePathname } from "next/navigation";

export default function RouteBg({ children }: { children: React.ReactNode }) {
  const p = usePathname() || "/";
  const tone =
    p.startsWith("/programs/autos") ? "bg-[#f9fbff]" :
    p.startsWith("/programs/investment") ? "bg-[#fff9f3]" :
    p.startsWith("/programs") ? "bg-[#f7fbf7]" :
    p.startsWith("/resources") ? "bg-[#f9f9ff]" :
    p.startsWith("/careers") ? "bg-[#fffaf7]" :
    p.startsWith("/donation") ? "bg-[#f6fbff]" :
    p.startsWith("/about") ? "bg-[#faf7ff]" :
    p.startsWith("/contact") ? "bg-[#f8fffb]" :
    p.startsWith("/how-it-works") ? "bg-[#f7faff]" :
    "bg-white";
  return <div className={tone}>{children}</div>;
}
