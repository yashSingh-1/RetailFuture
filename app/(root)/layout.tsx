import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import LeftSidebar from "@/components/shared/LeftSidebar";
import MobileNav from "@/components/shared/MobileNav";
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Retail",
  description: "The future of Retail",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body className={inter.className}>
      <MobileNav/>
        <main className="flex flex-row">
          <LeftSidebar />
          
          <div className="w-full flex-1 ">{children}</div>


        </main>
      </body>
    </html>
    </ClerkProvider>
  );
}
