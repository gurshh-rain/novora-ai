import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./components/nav";


export const metadata: Metadata = {
  title: "Novora.ai - The AI for you",
  description: "Novora.ai",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body      >
        <Nav />
        {children}
      </body>
    </html>
  );
}
