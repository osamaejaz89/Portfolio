import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://osamaejaz.dev"),
  title: {
    default: "Osama Ejaz · Manager IT (HO) & Senior React Native Developer",
    template: "%s · Osama Ejaz",
  },
  description:
    "Portfolio of Osama Ejaz — Manager IT (HO) at EFU General Insurance and Senior React Native / Frontend Developer based in Karachi, Pakistan. 5+ years delivering cross-platform mobile and web experiences.",
  keywords: [
    "Osama Ejaz",
    "React Native Developer",
    "Senior React Native Developer",
    "Next.js Developer",
    "Frontend Developer Karachi",
    "Manager IT EFU",
    "Mobile App Developer Pakistan",
    "TypeScript",
    "Redux",
    "Node.js",
    "MongoDB",
  ],
  authors: [{ name: "Osama Ejaz", url: "https://www.linkedin.com/in/osamaejaz89/" }],
  creator: "Osama Ejaz",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://osamaejaz.dev",
    title: "Osama Ejaz · Senior React Native & Frontend Developer",
    description:
      "5+ years building high-performance, cross-platform mobile and web applications with React Native, Next.js, and Node.js.",
    siteName: "Osama Ejaz — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Osama Ejaz · Senior React Native & Frontend Developer",
    description:
      "5+ years building high-performance, cross-platform mobile and web applications with React Native, Next.js, and Node.js.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#060B1A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable} dark`}>
      <body className="min-h-screen font-sans antialiased">{children}</body>
    </html>
  );
}
