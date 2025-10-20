import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Bsons Invest (App)",
  description: "Standalone investment mini-app: overview, guide, tools, FAQ.",
  manifest: "/manifest.webmanifest",
  themeColor: "#0A2C57",
  icons: { icon: "/icons/icon-192.png", apple: "/icons/icon-192.png" }
};
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-[var(--page-invest,#FFF9F2)]">{children}</body>
    </html>
  );
}
