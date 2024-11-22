import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Tooltip } from "@nextui-org/tooltip";

const myFont = localFont({ src: "./SuperShiny-0v0rG.ttf" });

export const metadata: Metadata = {
  title: "Create Next App",
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
        className={`${myFont.className} bg-neutral-800 flex flex-col justify-between p-4`}
      >
        <Tooltip
          content="Home Page"
          placement="bottom"
          className="font-sans font-bold "
        >
          <div className="w-92 absolute top-10 left-16 transform -translate-x-1/2 z-[10000] cursor-pointer hide-mouse-trail">
            <div className="font-sans font-bold  text-3xl flex flex-col space-y-4">
              <a
                href="/"
                className="w-full flex bg-white p-1 size-14 rounded-full fill-yellow-300 transition-transform duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:fill-gray-100"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="p-1 "
                >
                  <path d="m12.857 4.06l5.866 4.817c.33.27.527.686.527 1.13v8.803c0 .814-.638 1.44-1.383 1.44H15.25V15.5a2.75 2.75 0 0 0-2.75-2.75h-1a2.75 2.75 0 0 0-2.75 2.75v4.75H6.133c-.745 0-1.383-.626-1.383-1.44v-8.802c0-.445.197-.86.527-1.13l5.866-4.819a1.34 1.34 0 0 1 1.714 0m5.01 17.69c1.61 0 2.883-1.335 2.883-2.94v-8.802a2.96 2.96 0 0 0-1.075-2.29L13.81 2.9a2.84 2.84 0 0 0-3.618 0L4.325 7.718a2.96 2.96 0 0 0-1.075 2.29v8.802c0 1.605 1.273 2.94 2.883 2.94z"></path>
                </svg>
              </a>
            </div>
          </div>
        </Tooltip>
        {children}
      </body>
    </html>
  );
}
