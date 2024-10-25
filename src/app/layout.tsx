import type { Metadata } from "next";
import localFont from "next/font/local";
import { Roboto } from "next/font/google";
import "./globals.css";

import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";
import Body from "@/components/Body";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";

const notoSerifKhmer = localFont({
  src: "./fonts/NotoSerifKhmer.ttf",
  variable: "--font-noto-serif-khmer",
  weight: "400",
});

const dmSans = localFont({
  src: "./fonts/DMSansV.ttf",
  variable: "--font-dm-sans",
  weight: "400",
});

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "អក្ខរាវិរុទ្ធ",
  description: "អក្ខរាវិរុទ្ធ (ak-khara-veerut)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${notoSerifKhmer.variable} ${dmSans.variable} ${roboto.variable} antialiased`}
      >
        <ThemeContextProvider>
          <ThemeProvider>
            <div className="container">
              {/* <div className="wrapper"> */}
                <Navbar />
                <Body />
                {children}
                <Footer />
              </div>
            {/* </div> */}
          </ThemeProvider>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
