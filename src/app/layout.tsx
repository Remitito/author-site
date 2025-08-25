import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { crimsonText } from "@/fonts/all";

export const metadata: Metadata = {
  title: "Stacking the Odds",
  description:
    "10 evidence-based habits that will increase your chances of becoming rich",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${crimsonText.className}`}>
        <Navbar />

        {children}
      </body>
    </html>
  );
}
