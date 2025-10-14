import type { Metadata } from "next";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Spaceship Website",
  description: "A Spaceship website",
  icons: {
    icon: "/launch.png",
  },
};

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: ["100", "400", "500", "600", "700", "800"],
  variable: "--font-barlow-condensed",
});


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${barlowCondensed.variable}`}>{children}</body>
    </html>
  );
}
