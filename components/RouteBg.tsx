"use client";
import { usePathname } from "next/navigation";

export default function RouteBg({ children }: { children: React.ReactNode }) {
  const p = usePathname() || "/";
  // slightly stronger, but still subtle and professional
  const tone =
    p.startsWith("/programs/autos") ? "bg-[#F4F8FF]" :
    p.startsWith("/programs/investment") ? "bg-[#FFF5EC]" :
    p.startsWith("/programs/community-support") ? "bg-[#F5FFF5]" :
    p.startsWith("/programs") ? "bg-[#F6FAF6]" :
    p.startsWith("/resources") ? "bg-[#F6F6FF]" :
    p.startsWith("/careers") ? "bg-[#FFFAF5]" :
    p.startsWith("/donation") ? "bg-[#F2F9FF]" :
    p.startsWith("/about") ? "bg-[#FBF5FF]" :
    p.startsWith("/contact") ? "bg-[#F2FFFA]" :
    p.startsWith("/how-it-works") ? "bg-[#F5F9FF]" :
    p.startsWith("/testimonials") ? "bg-[#FDF7F2]" :
    "bg-white";
  return <div className={tone}>{children}</div>;
}
