import type { Metadata } from "next";
import { Mona_Sans } from "next/font/google";
import "./globals.css";
//import { ThemeProvider } from "@/components/theme-provider";

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CareerEz",
  description:
    "An AI-powered platform designed to help students and job seekers navigate their careers with clarity and confidence",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="dark">
      <body className={`${monaSans.className} antialiased pattern`}>{children}</body>
    </html>
  );
}
