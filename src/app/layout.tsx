import type { Metadata } from "next";
import { Inter } from "next/font/google";
import CursorGrid from "@/components/ui/CursorGrid";
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
      <body className="font-sans">
        <div
          aria-hidden
          className="pointer-events-none fixed inset-0 z-[70] hidden md:block"
        ></div>
        <CursorGrid
          className="min-h-screen w-full"
          cellSize={60}
          color="#818cf8"
          highlight="area"
          gridStyle="lines"
          radius={180}
          holdTime={400}
          fadeDuration={800}
          fillOpacity={0.06}
          gridOpacity={0.08}
          spotlight={0.6}
          clickPulse
        >
          {children}
        </CursorGrid>
      </body>
    </html>
  );
}
