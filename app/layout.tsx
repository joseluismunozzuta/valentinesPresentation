import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Playfair_Display } from "next/font/google";
import { Darker_Grotesque } from "next/font/google"

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const darker = Darker_Grotesque({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
})


const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-romantic",
})

export const metadata: Metadata = {
  title: "Mar's Valentine",
  description: "Mi detalle para Mar por San Valentin",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={darker.className}
      >
        {children}
      </body>
    </html>
  );
}
