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
  title: "Echoes of the Plum Grove Tracker",
  description: "Track all of the items found in the game Echoes of the Plum Grove",
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
        <div className="flex min-h-screen items-cemter justify-center bg-zinc-50 dark:bg-gray-800">
          <main className="flex min-h-screen w-full max-w-5xl flex-col items-start justify-start py-32 sm:items-start">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
