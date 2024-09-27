import type { Metadata } from "next";
import "./globals.css";
import { Gowun_Batang } from "next/font/google";

import Providers from "@/lib/Providers";
import { Suspense } from "react";
import Loading from "./loading";

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
          <Suspense fallback={<Loading />}>{children}</Suspense>
        </Providers>
      </body>
    </html>
  );
}
