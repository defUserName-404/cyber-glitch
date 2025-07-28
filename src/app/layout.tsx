import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import StarsCanvas from "@/components/Starfield";
import GlowingGlyphs from "@/components/GlowingGlyphs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cyberpunk Portfolio",
  description: "A cyberpunk themed portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <StarsCanvas />
        <GlowingGlyphs />
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}