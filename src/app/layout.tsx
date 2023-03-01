import * as React from "react";

import { Inter } from "next/font/google";
import "./globals.css";
import Head from "next/head";

const inter = Inter({
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin", "cyrillic"],
  display: "auto",
});

export const metadata = {
  title: "ChatGPT",
  description: "Generated by create next app",
  applicationName: "ChatGPT",
  authors: {
    name: "Xasanov Javohir",
    url: "https://portfoliowebapp.vercel.app",
  },
  creator: "Xasanov Javohir",
  generator: "Next.js",
  keywords: [
    "nextjs",
    "chatgpt",
    "chatgpt uz",
    "openai",
    "openai uz",
    "ai",
    "xasanov javohir",
  ],
  openGraph: {
    description: "ChatGPT is online website to ask anything",
    emails: ["javokhirdev@mail.com", "xasanof17@gmail.com"],
    phoneNumbers: ['998900198505'],
    publishedTime: '01.03.,'
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="h-full min-h-screen relative bg-white dark:bg-black">
        {children}
      </body>
    </html>
  );
}
