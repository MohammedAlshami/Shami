import type { Metadata } from "next";
import localFont from "next/font/local";
import "./../globals.css";
const myFont = localFont({ src: "./../SuperShiny-0v0rG.ttf" });

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" className="dark">
      <body
        className={`${myFont.className} bg-neutral-800 h-svh	 w-full  overflow-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
