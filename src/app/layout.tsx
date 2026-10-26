import type { Metadata } from "next";
import { IBM_Plex_Mono, Manrope } from "next/font/google";
import { siteUrl } from "@/data/links";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  // Without metadataBase, relative Open Graph image paths resolve against
  // localhost and every shared link renders a blank preview card.
  metadataBase: new URL(siteUrl),
  title: {
    default: "Firdaus Ravi Faizzani — IT Field Support Engineer & Developer",
    template: "%s — Firdaus Ravi Faizzani",
  },
  description:
    "Portfolio of Firdaus Ravi Faizzani, an IT Field Support Engineer and Informatics Graduate specializing in infrastructure operations, full-stack web applications, and applied AI.",
  keywords: [
    "Firdaus Ravi Faizzani",
    "IT Field Support Engineer",
    "PT Wavin Manufacturing Indonesia",
    "Outlier.ai",
    "Informatics Diponegoro University",
    "Web Developer",
    "Applied AI",
    "Data Science",
    "Semarang",
  ],
  authors: [{ name: "Firdaus Ravi Faizzani", url: siteUrl }],
  creator: "Firdaus Ravi Faizzani",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Firdaus Ravi Faizzani — IT Field Support & Developer",
    description: "IT infrastructure operations, web applications, and applied AI.",
    url: siteUrl,
    siteName: "Firdaus Ravi Faizzani",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/projects/cymonitor/preview.png",
        width: 1366,
        height: 900,
        alt: "CYMonitor — ESP32 telemetry display and browser recreation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Firdaus Ravi Faizzani — IT Field Support & Developer",
    description: "IT infrastructure operations, web applications, and applied AI.",
    images: ["/projects/cymonitor/preview.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${manrope.variable} ${plexMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
