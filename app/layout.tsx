import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CH's Website",
  description: "Very nice!",
  openGraph: {
    title: "CH's Website",
    description: "Hi, nice to meet you, this is CH's Website. Click to view more!",
    images: [
      {
        url: "https://ch-website.pages.dev/assets/banner.webp",
        width: 2500,
        height: 1000,
        alt: "CH's Website Banner",
      },
    ],
    type: "website",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
