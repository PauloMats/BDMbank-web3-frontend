
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import HeroSection from "../components/hero";
import Header from "../components/header/header";
import Desktop2 from "@/components/Desktop2/Desktop2";
import Desktop3 from "@/components/Desktop3/desktop3";
import Desktop4 from "@/components/Desktop4/desktop4";
import Desktop5 from "@/components/Desktop5/desktop5";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BDM Bank",
  description: "Seu banco digital no universo da Web3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <HeroSection />
        <Desktop2 />
        <Desktop3 />
        <Desktop4 />
        <Desktop5 />
      </body>
    </html>
  );
}
