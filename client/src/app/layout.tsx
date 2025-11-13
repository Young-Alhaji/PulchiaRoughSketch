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
    "photography, photographer, maternity photography, engagement photos, bridal portraits, family photography, professional photographer, The Pulchia Lab, Nigeria photographer, Lagos photographer",
  authors: [{ name: "Pulchia" }],
  creator: "Pulchia",
  publisher: "The Pulchia Lab",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "The Pulchia Lab - Professional Photography Studio",
    description:
      "Capturing Love, Light & Life ✨ Professional photography with a touch of whimsy and a whole lot of heart.",
    type: "website",
    locale: "en_US",
    url: "https://thepulchialab.com",
    siteName: "The Pulchia Lab",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "The Pulchia Lab - Professional Photography Studio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Pulchia Lab - Professional Photography Studio",
    description:
      "Capturing Love, Light & Life ✨ Professional photography services",
    creator: "@ThePulchiaLab", // Update with actual Twitter handle
  },
  verification: {
    google: "your-google-verification-code", // Add Google Search Console verification
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
          integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${dancingScript.variable} ${poppins.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
