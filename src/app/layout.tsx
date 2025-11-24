import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Great_Vibes, Inter, Space_Grotesk } from "next/font/google";

import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-sans",
  weight: ["200", "300", "400", "500", "600", "700"]
});
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-display" });
const greatVibes = Great_Vibes({ subsets: ["latin"], weight: "400", variable: "--font-logo" });

export const metadata: Metadata = {
  title: "Portfolio — Next.js + shadcn",
  description: "A minimal portfolio starter built with Next.js App Router and shadcn/ui components."
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} ${greatVibes.variable} min-h-screen bg-background font-sans text-foreground`}>
        {children}
      </body>
    </html>
  );
}
