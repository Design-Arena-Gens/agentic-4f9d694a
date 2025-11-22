import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://agentic-4f9d694a.vercel.app"),
  title: "Hello | A Friendly Next.js Greeting",
  description:
    "A gentle hello experience that greets you with warmth, a live clock, and inspiration to share kindness.",
  openGraph: {
    title: "Hello | A Friendly Next.js Greeting",
    description:
      "Drop by for a warm hello, a live time-aware greeting, and a reminder to spread kindness.",
    url: "https://agentic-4f9d694a.vercel.app",
    siteName: "Hello",
    images: [
      {
        url: "/og-hello.png",
        width: 1200,
        height: 630,
        alt: "Hello greeting with pastel gradient background",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hello | A Friendly Next.js Greeting",
    description:
      "Drop by for a warm hello, a live time-aware greeting, and a reminder to spread kindness.",
  },
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
        {children}
      </body>
    </html>
  );
}
