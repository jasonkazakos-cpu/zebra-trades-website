import type { Metadata } from "next";
import localFont from "next/font/local";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const displayFont = localFont({
  src: "../assets/fonts/BigShoulders-Variable.ttf",
  variable: "--font-display-raw",
  weight: "100 900",
  display: "swap",
});

const bodyFont = localFont({
  src: "../assets/fonts/WorkSans-Variable.ttf",
  variable: "--font-body-raw",
  weight: "100 900",
  display: "swap",
});

const monoFont = localFont({
  src: [
    { path: "../assets/fonts/IBMPlexMono-Regular.ttf", weight: "400", style: "normal" },
    { path: "../assets/fonts/IBMPlexMono-Medium.ttf", weight: "500", style: "normal" },
    { path: "../assets/fonts/IBMPlexMono-SemiBold.ttf", weight: "600", style: "normal" },
  ],
  variable: "--font-mono-raw",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.zebratrades.co.uk"),
  title: {
    default: "Zebra Trades | Home Improvements in Cheshunt & Hertfordshire",
    template: "%s | Zebra Trades",
  },
  description:
    "Zebra Trades provides handyman, kitchen, plumbing and home improvement services across Cheshunt and Hertfordshire, with fixed, written pricing on every job.",
  keywords: [
    "handyman Cheshunt",
    "home improvements Hertfordshire",
    "kitchen installation Cheshunt",
    "Zebra Trades",
  ],
  openGraph: {
    type: "website",
    siteName: "Zebra Trades",
    locale: "en_GB",
    images: [
      {
        url: "/images/og-default.webp",
        width: 1200,
        height: 630,
        alt: "Zebra Trades — Home Improvements in Cheshunt & Hertfordshire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    images: ["/images/og-default.webp"],
  },
};

export const viewport = {
  themeColor: "#14141a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en-GB"
      className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-body">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded focus:bg-accent focus:px-4 focus:py-2 focus:text-paper focus:font-semibold"
        >
          Skip to content
        </a>
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
