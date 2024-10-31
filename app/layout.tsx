import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import DynamicBackground from "../components/DynamicBackground";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Akon M Hasib - Email Designer & Frontend Developer",
  description:
    "Professional portfolio showcasing email design expertise and frontend development projects",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${inter.className} bg-light dark:bg-dark text-text-light-primary dark:text-text-dark-primary min-h-screen relative`}
      >
        {/* Background layers with proper z-index */}
        <div className="animated-background z-0" />
        <div className="noise-overlay z-20" />
        <div className="z-30">
          <DynamicBackground />
        </div>

        {/* Content */}
        <div className="relative z-40">
          <Navigation />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
