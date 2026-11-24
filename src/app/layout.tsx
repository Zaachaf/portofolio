import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Zabihullah Achmad Afghiansyah | Web Developer",
    template: "%s | Zabihullah",
  },
  description:
    "Portfolio of Zabihullah Achmad Afghiansyah, S.T., Informatics Engineering graduate from Universitas Pasundan.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
