import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./header";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Next js project",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col bg-white`}>
        <Header />
        <div className="p-5 flex-grow flex">
          {children}
        </div>
      </body>
    </html>
  );
}
