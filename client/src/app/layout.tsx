import type { Metadata } from "next";
import {
  Geist,
  Geist_Mono,
  Dancing_Script,
  Poppins,
  Inter,
} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dancingScript = Dancing_Script({
  variable: "--font-dancing-script",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "The Pulchia Lab - Professional Photography Studio",
  description:
    "Capturing Love, Light & Life ✨ Professional photography with a touch of whimsy and a whole lot of heart. Specializing in maternity, engagement, bridal, and family photography.",
  keywords:
    "photography, photographer, maternity photography, engagement photos, bridal portraits, family photography, professional photographer, The Pulchia Lab",
  authors: [{ name: "Pulchia" }],
  openGraph: {
    title: "The Pulchia Lab - Professional Photography Studio",
    description:
      "Capturing Love, Light & Life ✨ Professional photography with a touch of whimsy and a whole lot of heart.",
    type: "website",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${poppins.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
