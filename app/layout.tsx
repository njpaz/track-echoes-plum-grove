import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "./ui/nav";

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
        <Nav />

        <div className="flex min-h-screen items-cemter justify-center bg-zinc-50 dark:bg-gray-800">
          <main className="flex min-h-screen w-full max-w-5xl flex-col items-start justify-start py-32">
            {children}
          </main>
        </div>

        <footer className="p-2">
          <p>Echoes of the Plum Grove is ©2024 by Unwound Games. All images are from <a href="https://echoesoftheplumgrove.wiki.gg/" target="_blank" rel="noreferrer noopener">the official Echoes of the Plum Grove wiki</a>.</p>
        </footer>
      </body>
    </html>
  );
}
