import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import "./globals.css";

// Fonts setup
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// SEO Metadata
export const metadata: Metadata = {
  title: "Mughal Nama – Timeless Urdu Poetry",
  description: "Experience the soulful beauty of Urdu poetry in a digital book format.",
};

// Layout
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#1b1b1b] text-[#f5f5f5]`}
      >
        {/* Header */}
        <header className="w-full px-6 py-4 shadow-md bg-[#121212] border-b border-[#2a2a2a] flex justify-between items-center">
          <Link href="/">
            <h1 className="text-2xl md:text-3xl font-bold tracking-wider font-serif text-[#f0e6d2] hover:text-[#d6bd88] transition-colors">
              Mughal Nama
            </h1>
          </Link>
          <nav className="space-x-6 text-sm md:text-base">
            <Link
              href="/book"
              className="text-[#d4c2a3] hover:text-[#f8e2b8] transition"
            >
              Read Book
            </Link>
            <Link
              href="/admin/dashboard"
              className="text-[#d4c2a3] hover:text-[#f8e2b8] transition"
            >
              Admin Panel
            </Link>
          </nav>
        </header>

        {/* Main Content */}
        <main>{children}</main>
      </body>
    </html>
  );
}
