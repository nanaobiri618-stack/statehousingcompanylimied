import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "State Housing Company Limited - The Nation's No. 1 Builder",
  description:
    "Ghana's premier state-owned housing company. Established in 1956, SHC provides quality affordable homes, building construction, architecture design, and mortgage facilitation services.",
  keywords: [
    "State Housing Ghana",
    "SHC Ghana",
    "affordable homes Ghana",
    "housing Ghana",
    "mortgage Ghana",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 transition-opacity duration-300">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
