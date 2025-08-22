import type { Metadata } from "next";
import { Poppins, Ovo } from "next/font/google";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const outfitFont = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: '500',
});

const ovoFont = Ovo({
  variable: "--font-ovo",
  subsets: ["latin"],
  weight: '400',
});


export const metadata: Metadata = {
  title: "Krushna Bhanushali - Portfolio",
  description: "Krushna's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="font-sans">
      <body
        className={`${outfitFont.variable} ${ovoFont.variable} antialiased`}
      >

        {children}
        <Analytics />
      </body>
    </html>
  );
}
