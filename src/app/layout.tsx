import type { Metadata } from "next";
import { Geist, Geist_Mono, Tiro_Devanagari_Hindi } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const tiroDevanagariHindi = Tiro_Devanagari_Hindi({
  variable: "--font-tiro-devanagari-hindi",
  subsets: ["devanagari"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Mala Jaap",
  description: "Mala Jaap",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${tiroDevanagariHindi.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
