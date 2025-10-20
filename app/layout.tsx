import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import type { Metadata } from "next";
import { Inter, Playfair_Display, Lora, Poppins } from "next/font/google";

export const metadata: Metadata = {
  title: "Bsons Inc.",
  description: "Community • Commerce • Generational Wealth",
  icons: { icon: "/logo.png" }
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });
const lora = Lora({ subsets: ["latin"], variable: "--font-lora" });
const poppins = Poppins({ weight: ["400","500","600","700"], subsets: ["latin"], variable: "--font-poppins" });

export default function RootLayout({ children }: { children: React.ReactNode }){
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} ${lora.variable} ${poppins.variable}`}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
