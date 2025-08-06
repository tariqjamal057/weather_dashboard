import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SideBar from "@/components/layouts/sidebar";
import { Header } from "@/components/layouts/header";
import { Provider } from "./provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "TJ Weather Dashboard",
  description: "A simple weather dashboard built with Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Provider>
          <div className="flex h-screen bg-gray-50 p-4 text-black ">
            <SideBar />
            <div className="md:ms-4 w-full flex flex-col gap-y-4">
              <Header />
              <div className="rounded flex-1">{children}</div>
            </div>
          </div>
        </Provider>
      </body>
    </html>
  );
}
