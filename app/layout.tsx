import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

import { Navbar } from "@/components/navbar";

const font = Ubuntu({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "bored?",
  description: "Don't be bored, do something!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${font.className} antialiased bg-purple-50`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
