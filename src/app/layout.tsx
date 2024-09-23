import type { Metadata } from "next";
import "./globals.css";
import { Gowun_Batang } from "next/font/google";
import Link from "next/link";
import Providers from "@/lib/Providers";

const gowunBatang = Gowun_Batang({
  weight: ["400", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kwangwoon Kendo Quiz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${gowunBatang.className} antialiased p-3`}>
        <Providers>
          <header className="flex space-x-3 border-b-2 border-black">
            <Link href="/">Home</Link>
            <Link href="/quiz">Quiz</Link>
            <Link href="/ranking">Ranking</Link>
          </header>
          {children}
        </Providers>
      </body>
    </html>
  );
}
