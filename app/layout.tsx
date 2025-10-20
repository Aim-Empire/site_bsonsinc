import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import RouteBg from "@/components/RouteBg";

export const metadata: Metadata = {
  title: "Bsons Inc.",
  description: "Community • Commerce • Generational Wealth",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&family=Poppins:wght@400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Header />
        <RouteBg>
          {children}
        </RouteBg>
        <Footer />
      </body>
    </html>
  );
}
