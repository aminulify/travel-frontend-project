import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Navbar";
import Footer from "@/Components/Footer";

const poppinsFont = Poppins({
  variable: "--font-poppins",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Travel App",
  description: "Travel Ui/Ux App for Campaign",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${poppinsFont.variable}`}
      >
        <Navbar />
         <main className="relative overflow-hidden">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
