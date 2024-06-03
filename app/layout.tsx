import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { GoogleTagManager } from "@next/third-parties/google";
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

    <GoogleTagManager gtmId="GTM-WWPXG74M"/>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
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

      <script type="text/javascript" src="/js/jquery.js"></script>
    <script type="text/javascript" src="/js/vendors.min.js"></script>
    <script type="text/javascript" src="/js/main.js"></script>
      </body>
    </html>
  );
}
