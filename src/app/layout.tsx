import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import "./globals.css";
import { dbConnect } from "@/service/db";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

export const metadata: Metadata = {
  title: "EduTech - World's best LMS Platform",
  description: "Explore || Learn || Build || Share",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  await dbConnect();
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(inter.className, poppins.className)}>{children}</body>
    </html>
  );
}
