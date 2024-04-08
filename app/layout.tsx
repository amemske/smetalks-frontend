import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/Header";
import Footer from "@/app/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SME Business Magazine",
  description: "Latest Business News",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <head>
      <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin/>
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
      <link rel="stylesheet" href="/css/vendors.min.css" />
      <link rel="stylesheet" href="/css/icon.min.css" />
      <link rel="stylesheet" href="/css/style.min.css" />
      <link rel="stylesheet" href="/css/responsive.min.css" />
      <link rel="stylesheet" href="/css/blogger.css" />
      <link rel="stylesheet" href="/css/custom.css" />
    </head>

      <body className={inter.className}>
      <div className="box-layout">


      <Header />

      {children}
      </div>
      <Footer/>
      </body>
    </html>
  );
}
