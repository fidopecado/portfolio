import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Firdaus Ravi Faizzani — IT Field Support & Developer",
  description:
    "Portfolio of Firdaus Ravi Faizzani, an IT Field Support engineer and Informatics graduate working across infrastructure, web development, and applied AI.",
  keywords: [
    "Firdaus Ravi Faizzani",
    "IT Field Support",
    "Web Developer",
    "Data Science",
    "Semarang",
  ],
  openGraph: {
    title: "Firdaus Ravi Faizzani",
    description: "IT operations, web development, and applied AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${manrope.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}

