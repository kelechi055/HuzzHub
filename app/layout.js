import localFont from "next/font/local";
import "./globals.css";
import Head from "next/head";
import { Analytics } from "@mui/icons-material";
import { Analytics } from "@vercel/analytics/react"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "HuzzHub",
  description: "1 Stop Hub for your Rizz Improvements",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
          <link rel="icon" href="/chillguy.png" />
        </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
